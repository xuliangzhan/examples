define([
  'xe-ajax',
  'xe-utils',
  'text!views/home.html'
], function (XEAjax, XEUtils, tmpl) {
  var exports = {
    template: tmpl,
    data: function () {
      return {
        title: 'vue + xe-ajax + mock 例子',
        dateStr: XEUtils.toDateString(new Date(), 'MM/dd/yyyy HH:mm:ss'),
        loading: false,
        userList: [],
        shoppingList: [],
        testList: [],
        userForm: {
          name: null,
          password: null
        },
        successMsg: null,
        errorMsg: null
      }
    },
    methods: {
      init: function () {
        var that = this
        XEAjax.fetchGet('/api/role/list').then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              that.shoppingList = data
            })
          } else {
            that.shoppingList = []
          }
        })
        XEAjax.fetchGet('/api/user/page/list/10/1').then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              that.userList = data.result
            })
          } else {
            that.userList = []
          }
        })
        // 跨域调用 jsonp 服务,返回数据
        XEAjax.fetchJsonp('http://xuliangzhan.com/api/user/message').then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              // data
            })
          }
        })
      },
      save: function () {
        // 保存
        var that = this
        this.loading = true
        XEAjax.fetchPost('/api/user/insert', this.userForm).then(function (response) {
          that.loading = false
          response.json().then(function (data) {
            if (response.ok) {
              // 请求成功
              that.errorMsg = null
              that.successMsg = data
            } else {
              // 请求失败
              that.successMsg = null
              that.errorMsg = data
            }
          })
        })
      }
    },
    created: function () {
      this.init()
    }
  }
  return exports
})
