import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events'

// axios跨域请求封装
import request, { baseUrl } from './utils/request'
// 把axios挂载在大Vue的原型链上 这样每个页面都可以使用 this.$http
Vue.prototype.$http = axios

Vue.prototype.$request = request;
Vue.prototype.$baseUrl = baseUrl;

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
