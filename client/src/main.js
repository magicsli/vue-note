import Vue from 'vue'
import App from './App.vue'
import { Button, NavBar, Toast, Icon, Circle, Steps, Step} from 'vant';


Vue.use(Button)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Circle)
Vue.use(Steps)
Vue.use(Step)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
