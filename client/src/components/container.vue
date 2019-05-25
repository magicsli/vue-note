<template>
    <div class="container" ref="container">
        <van-steps direction="vertical" :active="2">

            <van-step v-for=" i in 12" :key="i">
                <h3>去老李家吃饭</h3>
                <p>2016-07-12 12:40</p>
            </van-step>


        </van-steps>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    mounted(){
        new BScroll(this.$refs.container)
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
            height calc(12vh)
            .van-step__title
                p
                    margin-top 10px
</style>

