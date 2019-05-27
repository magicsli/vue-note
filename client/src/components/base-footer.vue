<template>
    <div class="basefooter">
        <van-button ref="button" @click="handleRotate" round size="small" type="primary">
             <van-icon name="plus" size='24px'/>
        </van-button>
      <van-circle
        v-model="currentRate"
        color="#07c160"
        fill="#fff"
        size="22vw"
        layer-color="#ebedf0"
        :text="text"
        :rate="setRate"
        :speed="100"
        :clockwise="false"
        :stroke-width="40"
        />
    
        <van-popup v-model="show" position="right" :close-on-click-overlay='false'>
           
           <van-collapse style=" width:calc(90vw); margin-right:calc(5vw)" v-model="activeName" accordion>
            <van-collapse-item title="设置行程时间" name="1">
                 <van-datetime-picker
                v-model="currentTime"
                :show-toolbar="false"
                :change ="isChange = true"
                type="time"
                />

                <!-- <input type="time" v-model="currentTime" name="time" id=""> -->
            </van-collapse-item>
            <van-collapse-item title="出行日期" name="2">
                <van-datetime-picker
                v-model="currentDate"
                :show-toolbar="false"
                :change ="isChange = true"
                type="date"
                :min-date="new Date((new Date).getFullYear(),0,1)"
                :max-date="new Date((new Date).getFullYear(),11,31)"
                />
            </van-collapse-item>
            </van-collapse>

           
          
            <van-cell-group>
            <van-field
                style="width:calc(90vw);margin-right:calc(5vw)"
                v-model="message"
                label="待办事宜"
                type="textarea"
                placeholder="不能超过30个字符"
                rows="1"
                autosize
            />
            </van-cell-group>
            <div class="addbox">
            <van-button class="time-btn" size='small'
                 @click="handleRotate" 
                type="danger">取消</van-button>
            <van-button class="time-btn" size='small'
                 @click="()=> {handleRotate(); increment()}" 
                 type="info">添加</van-button>
            </div>
                
        </van-popup>
    </div>
    
</template>

<script>
import { Toast, Notify} from 'vant'
import { increment } from 'Api/index'


export default {
    data() {
        return {
        currentRate: 0,
        show:false,
        message:'',
        currentTime:"12:00",
        currentDate:new Date(),
        activeName:'12',
        isChange: false,
        };
    },
    props: {
        username:String,
        updateList:Function,
        rate:Array
    },
    methods:{
        increment () {
            const message = this.message.trim()
            if( !message || !this.isChange){
                Toast.fail('输入不能为空');
                return
            }

            if(message.length > 30){
                 Toast.fail('输入请不要超过30个字符');
                return
            }

           const year = this.currentDate.getFullYear()
           const month = this.currentDate.getMonth() + 1
           const day = this.currentDate.getDate();
           const toTimeStr = year + "/" + month + "/" + day + "\t" + this.currentTime + ":00"
           const toTime = new Date( toTimeStr ).getTime() 
           

            if(toTime <= Date.now()){
                 Toast.fail('行程时间不能小于现在时间');
                return
            }
            var username = this.username
            increment({
                username,
                message,
                toTime
            }).then( res => {
             const flag =  res.data.code === 0
                    Notify({
                    message: res.data.msg,
                    duration: 1000,
                    background: flag?'#07c160':"#c5c5c5"
                    });
                this.updateList(res.data.mes)
            })
            this.isChange = false;
        },
        handleRotate () {
        this.$refs.button.style.transform 
            = this.show ?'rotate(90deg)' :'rotate(-90deg)';
            this.show = !this.show;
        }
     },
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%'
        },
        setRate(){
            let temp = this.rate[0] / this.rate[1] * 100;
            temp = isNaN(temp) ? 0 : temp
            return temp
        }
    },
    watch:{
        
    }
}
</script>



<style lang="stylus" scoped>
.basefooter
    display flex
    justify-content space-between
    align-items center
    .van-button--primary 
        border-radius 50%
        width calc(20vw)
        height calc(20vw)
        margin calc(5vw)
        display flex
        justify-content center
        align-items center
        line-height 24px
        transition all .6s
        .van-button__text
            height 24px
    .addbox
        display flex
        margin-right calc(5vw)
        button   
            flex 1
            line-height 35px
            height 35px
</style>
