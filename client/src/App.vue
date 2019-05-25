<template>
  <div id="app">
    <base-header></base-header> 
    <container></container>
    <base-footer></base-footer> 
   
  </div>
</template>

<script>
import baseFooter from 'Components/base-footer' // 底部
import baseHeader from 'Components/base-header'  // 头部
import container from 'Components/container'    // 内容
export default {
  name: 'app',
  components: {
    baseFooter,
    baseHeader,
    container
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
</style>
