// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'

Vue.use(Element)
Vue.use(VueI18n)
Vue.use(VXEAjax, XEAjax)
Vue.config.productionTip = false

// 开发环境启动前端虚拟服务
if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

// 初始化国际化
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: require('./static/common/en.json'),
    zh: require('./static/common/zh.json')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
