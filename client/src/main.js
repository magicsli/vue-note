import Vue from 'vue'
import App from './App.vue'
import { Button, NavBar, Toast, Icon, Circle, Steps, 
  Step, CellGroup, Field, Popup, DatetimePicker, CollapseItem, 
   Collapse} from 'vant';

Vue.use(Button)
.use(NavBar)
.use(Toast)
.use(Icon)
.use(Circle)
.use(Steps)
.use(Step)
.use(CellGroup)
.use(Field)
.use(Popup)
.use(DatetimePicker)
.use(Collapse)
.use(CollapseItem);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
