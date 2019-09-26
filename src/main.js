import Vue from 'vue'
import App from './App.vue'
import router from './script/router'
import store from './script/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import filter from './script/filter'
import directive from './script/directive'
import instance from './script/config/http'
import './style/common.scss'

Vue.prototype.$http = instance

// 初始化所有过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

// 初始化所有指令
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key])
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
