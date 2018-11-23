<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
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
      this.$ajax.interceptors.request.use((request, next) => {
        next()
      })
      // 响应之后拦截器
      this.$ajax.interceptors.response.use((response, next) => {
        next()
      }, (e, next) => {
        next()
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
