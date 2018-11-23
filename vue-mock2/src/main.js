// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import XEAjax from 'xe-ajax'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'

Vue.use(Element)
Vue.use(VueI18n)
Vue.config.productionTip = false

XEAjax.setup({
  bodyType: 'form-data',
  credentials: 'include',
  headers: {
    'Accept': 'application/json, text/plain, */*;'
  }
})

// 开发环境启动前端虚拟服务
if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

const lang = 'zh'
XEAjax.getJSON('api/i18n/list', {lang}).then(data => {
  // 初始化国际化
  const i18n = new VueI18n({
    locale: lang,
    messages: {
      [lang]: data
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
})
