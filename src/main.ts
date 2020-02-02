import Vue from 'vue'
import {
  Row, Cell, Button, Icon, Col, CellGroup, NumberKeyboard,
} from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [NumberKeyboard.name]: NumberKeyboard,
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
