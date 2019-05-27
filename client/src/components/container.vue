<template>
    <div class="container" ref="container">
        <van-steps @click="handleUpdate()" direction="vertical" :active="rate"  >

            <van-step 
            v-for=" item in messageList" 
            :key="item.recordTime"
            
            >
            <van-panel :title="item.message"
                :desc="item.toTime | getTime" 
                style='width:80%'
                :class="item | getClass"
                :status="item | getState">
                <div slot="footer">
    <van-button plain hairline  @click="handleChange(item._id, item)" size="mini" type="primary">{{item.state?'未完成':'完成'}}</van-button>
    <van-button plain hairline @click="handleRemove(item._id, item)" size="mini" type="danger">删除</van-button>
  </div>
                </van-panel>
               
            </van-step>


        </van-steps>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {remove, changeState} from 'Api/index'
import {Toast} from 'vant'
export default {
    props:{
        messageList:Array,
        rate:Number,
        username:String
    },
    mounted(){
        new BScroll(this.$refs.container)
    },
    filters:{
        getTime(timeNum){
            let time = new Date(timeNum)
            const minutes = time.getMinutes() / 10 <= 1 ? time.getMinutes()+'0' : time.getMinutes() 
            return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}\t
            ${time.getHours()}:${minutes}`
        },
        getState ( {state, toTime } ) {
          return state ? '已完成'
                : (toTime <= Date.now() ? '未完成' : "待办");
                
            
        },
        getClass({state, toTime }){
             if(state){
                return 'resolve'
            }else{
                if(toTime <= Date.now()){
                    return 'reject'
                }else{
                    return "pending"
                }
            }
        }
    },
    methods:{
        handleRemove(_id, item){
           remove({username:this.username, _id})
           .then( res=>{
              if(res.data.code === 0){
                 const index =  this.messageList.indexOf(item)
            Toast.loading({
                    mask: true,
                    duration:800,
                    message: 'loading...',
                    onClose:()=>{
                        this.messageList.splice(index, 1)
                    }})
              }
           })
        },

        handleChange(_id, item){
            const result = changeState({_id, state: !item.state})
            Toast.loading({
                    mask: true,
                    duration:800,
                    message: 'loading...',
                    onClose:()=>{
                         result.then(res => {
                            if(res.data.code === 0){
                                item.state = !item.state
                            }
                        })
                    }})
        }
    }

}
</script>


<style lang="stylus" scoped>
.container
    flex 1
    padding-left 12%
    overflow hidden
    .van-steps.van-steps--vertical
        background-color inherit
        text-align left
        .van-hairline
            height calc(16vh)
            .van-step__title
                p
                    margin-top 10px

.resolve
    .van-cell__value
        span
             color #07c160
.reject
    .van-cell__value
        span
             color red
.pending
    .van-cell__value
        span
             color #a3a3a3
</style>

