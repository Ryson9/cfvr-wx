import Vue from 'vue'
import vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(vant)

new Vue({
  components: {
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
