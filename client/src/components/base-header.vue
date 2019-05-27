<template>
  <div class="baseheader">
    <van-nav-bar
      :title="bool?'全部事宜':'今日事宜'"
      :left-text="bool?'今天事宜':'全部事宜'"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ><van-icon name="smile-o" slot="right" size="18px" /></van-nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data(){
    return {
      bool: true
    }
  },
    props:{
      cut: Function,
    },
  methods: {

    onClickLeft() {
      this.cut(this.bool)
      this.bool = !this.bool
    },
    onClickRight() {
      Toast(" 作者: MagicSli \nQQ: 2544510157");
    }
  }
};
</script>

<style lang="stylus" scoped>
.baseheader
    .van-nav-bar__text
        color #07c160
    .van-icon
        color #07c160 !important
</style>

