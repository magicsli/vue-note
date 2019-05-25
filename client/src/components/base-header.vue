<template>
  <div class="baseheader">
    <van-nav-bar
      title="今日事宜"
      left-text="待办"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ><van-icon name="star-o" slot="right" size="18px" /></van-nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  methods: {

    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
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

