import Vue from 'vue'
import App from './App.vue'
import Wangeditor from 'wangeditor'
import './plugins/element.js'
import  'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$E = Wangeditor

new Vue({
  render: h => h(App),
}).$mount('#app')
