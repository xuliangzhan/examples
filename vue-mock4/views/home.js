define([
  'text!views/home.html'
], function (tmpl) {
  var exports = {
    template: tmpl,
    data: function () {
      return {
        title: 'vue + xe-ajax 3.0 + mock 例子',
        dateStr: this.$utils.dateToString(new Date(), 'MM/dd/yyyy HH:mm:ss'),
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
        this.$ajax.fetchGet('/api/role/list').then(response => response.json()).then(function (data) {
          this.shoppingList = data
        }).catch(function (data) {
          this.shoppingList = []
        })
        this.$ajax.fetchGet('/api/user/page/list/10/1').then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              this.userList = data.result
            })
          } else {
            this.userList = []
          }
        })
        this.$ajax.fetchJsonp('http://xuliangzhan.com/api/user/message').then(function (response) {
          // 请求成功
        }).catch(function (response) {
          // 请求失败
        })
      },
      save: function () {
        this.loading = true
        this.$ajax.fetchPost('/api/user/insert', this.userForm).then(function (response) {
          this.loading = false
          response.json().then(function (data) {
            if (response.ok) {
              this.errorMsg = null
              this.successMsg = data
            } else {
              this.successMsg = null
              this.errorMsg = data
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
