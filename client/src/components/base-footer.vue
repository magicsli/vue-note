<template>
    <div class="basefooter">
        <van-button round size="small" type="primary">
             <van-icon name="plus" size='24px'/>
        </van-button>
      <van-circle
        v-model="currentRate"
        color="#07c160"
        fill="#fff"
        size="22vw"
        layer-color="#ebedf0"
        :text="text"
        :rate="rate"
        :speed="100"
        :clockwise="false"
        :stroke-width="40"
        />
    </div>
</template>

<script>
export default {
      data() {
        return {
        currentRate: 0,
        rate: 16
        };
    },
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%'
        }
    }
}
</script>



<style lang="stylus" scoped>
.basefooter
    display flex
    justify-content space-between
    align-items center
    button 
        border-radius 50%
        width calc(20vw)
        height calc(20vw)
        margin calc(5vw)
        display flex
        justify-content center
        align-items center
        line-height 24px
        .van-button__text
            height 24px
</style>
