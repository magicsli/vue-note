<template>
  <div id="app">
    <base-header></base-header> 
    <container :messageList="messageList"></container>
    <base-footer></base-footer> 

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
    @click-right-icon="$toast('用户名有3-15位字母或者数字组成\n 密码由4-10为字母或数字组成')"
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
      value:'',
      show: false,
      isShow:false,
      isShow2:false,
      isRegister:false,
      username:'',
      password:'',
      verifyPassword:'', 
      label:'登录',
      messageList:[]
    }
  },
  components: {
    baseFooter,
    baseHeader,
    container
  },
  methods:{
    switch () {   // 切换登录 / 注册
      this.isRegister = !this.isRegister;
      this.username = '';
      this.password = '';
    },
    sumbit () {
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
                  this.messageList = res.data.data
                  this.show = false;
                }
              })
            }
        })

      }else{
       login({username, password})
         .then( res => {
            if(res.data.code === 0){
              this.messageList = res.data.data;
              this.show = false;
            }
         })

      }
    }
  },
  computed:{
    rate(){
      let i = 0;
       this.messageList.forEach( mes =>{
       })
    }
     
  },
  created(){

      if(document.cookie.indexOf('userid') !== -1 ){
        autoLogin().then( res => {
          if(res.data.code === 0){
              this.messageList = res.data.data
          }else{
               this.show = true;
          }
        })
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
