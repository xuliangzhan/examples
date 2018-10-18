<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { interceptors } from 'xe-ajax'

export default {
  name: 'App',
  created () {
    this.init()
  },
  methods: {
    init () {
      this.onInterceptors()
    },
    onInterceptors () {
      // 请求之前拦截器
      interceptors.request.use((request, next) => {
        next()
      })
      // 响应之后拦截器
      interceptors.response.use((response, next) => {
        next()
      }, (e, next) => {
        next()
      })
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
}
</style>
