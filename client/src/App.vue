<template>
  <div id="app">
    <base-header :cut='getToday'></base-header> 
    <container :username ='username' :rate="rate[2]" :messageList="messageList"></container>
    <base-footer :rate="rate" :username ='username' :updateList='updateList' ></base-footer> 

  <van-popup v-model="show" 
    :close-on-click-overlay='false'
   >
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('用户名由3-15位字母或者数字组成\n 密码由4-10为字母或数字组成')"
      />

      <van-field
        v-model="password"
        :type="isShow ?'text':'password'"
        label="密码"
        placeholder="请输入密码"
        :right-icon=' isShow ? "eye-o":"closed-eye" '
        @click-right-icon="isShow = !isShow"
        required
      />
      
      <van-field
        v-show="isRegister"
        v-model="verifyPassword"
        :type="isShow2 ?'text':'password'"
        label="确认密码"
        placeholder="请再次输入密码"
        :right-icon=' isShow2 ? "eye-o":"closed-eye" '
        @click-right-icon="isShow2 = !isShow2"
        required
      />
      </van-cell-group>
    <div class="button-box"> 
      <van-button type="primary" size="large" @click="sumbit" >{{isRegister?"注册":'登录'}}</van-button>
      <span @click="this.switch" >{{isRegister?"立即登录":'还没有账号'}}</span>
    </div>
    </van-popup>
    
  </div>
</template>

<script>
import baseFooter from 'Components/base-footer' // 底部
import baseHeader from 'Components/base-header'  // 头部
import container from 'Components/container'    // 内容

import {Toast} from 'vant'

import {login, autoLogin, register} from './api/index' 

export default {
  name: 'app',
  data(){
    return {
      show: false,        // 弹窗显现
      isShow:false,       //  密码可见
      isShow2:false,      // 确认密码可见
      isRegister:false,  // 切换登录 / 注册
      username:'',        // 用户名
      password:'',        // 密码
      verifyPassword:'',  // 确认密码  
      messageList:[],     // 需要展示的消息列表
      waitMessageList:[]  // 暂时存储的空数组
    }
  },
  components: {
    baseFooter, // 尾部
    baseHeader, // 头部
    container   // 展示内容
  },
  methods:{
    switch () {   // 切换登录 / 注册
      this.isRegister = !this.isRegister;
      this.username = '';
      this.password = '';
    },

    sumbit () {   // 添加消息事件
      const username = this.username.trim();
      const password = this.password.trim();
      if(!username || !password) {
        Toast.fail('用户名与密码不能为空');
        return
      }
      if(!/^[a-zA-Z][a-zA-Z0-9]{3,15}$/.test(username)){
         Toast.fail('用户名不正确');
         return
      }
      if(!/^[a-zA-Z0-9]{4,10}$/.test(password)){
          Toast.fail('密码不能含有非法字符，长度在4-10之间');
          return
       }

      if(this.isRegister && this.verifyPassword !== password){
          Toast.fail('两次密码输入不一致');
          return
      }
        
      if(this.isRegister){
         register({username, password})
        .then( res => {
            if(res.data.code === 0){
              autoLogin().then( res => {
                if(res.data.code === 0){
                  console.log(123456789)
                     Toast.loading({
                      mask: true,
                      duration:800,
                      message: 'loading...',
                      onClose:()=>{
                      this.messageList = res.data.data.sort( (mes, next) => {
                    return mes.toTime - next.toTime
                      });
                      this.show = false;
                  }})
                }
              })
            }
        })

      }else{
       login({username, password})
         .then( res => {
            if(res.data.code === 0){
              this.messageList = res.data.data.sort( (mes, next) => {
                return mes.toTime - next.toTime
              });
              Toast.loading({
                  mask: true,
                  duration:800,
                  message: 'loading...',
                  onClose:()=>{
                    this.show = false;
                  }})
             
            }
         })

      }
    },
    auto (){   // 自动登录 + 向后台获取数据
      autoLogin().then( res => {
          if(res.data.code === 0){
              this.messageList = res.data.data.sort( (mes, next) => {
                return mes.toTime - next.toTime
              });
              this.username = res.data.username
          }else{
               this.show = true;
          }
        })
    },
    updateList(mes){ // 添加消息回调函数
     this.messageList.push(mes) 
     this.messageList.sort( (mes, next) => {
                return mes.toTime - next.toTime
     }); 
    },
    getToday(bool){    // 切换全部事务 和 今日事务
      Toast.loading({
        mask: true,
        duration:800,
        message: 'loading...',
        onClose:()=>{
              [this.waitMessageList,this.messageList] = [this.messageList, this.waitMessageList]
          
          if(bool){
              this.messageList = this.waitMessageList.filter( mes =>{
              if(new Date(mes.toTime).getDate() === new Date( Date.now()).getDate()
              && new Date(mes.toTime).getMonth() === new Date( Date.now()).getMonth()
                ){
                return true
              }
            })
          }
        }
      });
      
       
    }

  },
  computed:{
    rate(){  // 展示的一个细碎数据处理,如今天事务完成度, 事务进程
      let i = 0;
      let step = 0;
      const now =  new Date( Date.now() )
       const day = now.getDate();
       const month = now.getMonth();

       const hour = now.getHours();
       const minute = now.getMinutes();
  
         this.messageList.forEach( (mes, index) =>{
        mes.toTime < Date.now() && ( step = index )
         mes.state && i++
          return true
       })

       console.log(i, step)
       return [i, this.messageList.length, step]
    }
     
  },
  async created(){ // 在组件初始化时, 若登录过就自动登录, 否则就弹窗登录
      if(document.cookie.indexOf('userid') !== -1 ){
         this.auto()
      }else{
       this.$nextTick( () => {
         this.show = true;
        })
      }
  }
}
</script>

<style lang="stylus">
@import '~Css/reset.styl';
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color #f5f5f5
  height 100%
  display flex
  flex-direction column
  justify-content space-between
  .van-popup
    background-color rgba(0,0,0,0)
    text-align left 
    .van-cell-group
      width 80vw
      position relative
      .van-cell__title
        max-width 68px 
    .button-box
      background-color rgba(0,0,0,0)
      color #ccc
      text-align right
      display flex
      flex-direction column
      margin-top 12px
      span 
        padding 5px 8px
</style>
