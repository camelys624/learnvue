// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置mintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
// 引入自己的css
import './assets/css/style.css'
// 引入自己的组件
import MyUl from '@/components/common/MyUl.vue'
import MyLi from '@/components/common/MyLi.vue'
// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios
// 安装插件,就是注册全局组件及挂载属性

// 注册自己的组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
