define([
  'xe-ajax-mock'
], function (XEAjaxMock) {
  XEAjaxMock
  .GET('api/role/list', function (request, response) {
    return response.require('mock/json/api/role/list.json')
  })
  .POST('api/role/update', function (request, response) {
    return response.require('mock/json/api/role/update.json')
  })
  .POST('api/role/insert', function (request, response) {
    return response.require('mock/json/api/role/insert.json')
  })
  .DELETE('api/role/delete/{id}', function (request, response) {
    return response.require('mock/json/api/role/delete.json')
  })
  .GET('api/role/page/list/{pageSize}/{currentPage}', function (request, response) {
    return response.require('mock/json/api/list/page.json')
  })

  .GET('api/user/list', function (request, response) {
    return response.require('mock/json/api/user/list.json')
  })
  .POST('api/user/update', function (request, response) {
    return response.require('mock/json/api/user/update.json')
  })
  .DELETE('api/user/delete/{id}', function (request, response) {
    return response.require('mock/json/api/user/delete.json')
  })
  .GET('api/user/page/list/{pageSize}/{currentPage}', function (request, response) {
    return response.require('mock/json/api/user/list/page.json')
  })
  .POST('/api/user/insert', function (request, response) {
    if (request.body.password && request.body.password.length >= 6) {
      return response.require('mock/json/api/user/insert.json')
    }
    response.status = 500
    response.body = {message: '密码不能小于六位数'}
    return response
  })

  .GET('api/i18n/list', function (request, response) {
    return response.require(request.params.lang === 'zh' ? 'mock/json/api/i18n/findMap.zh.json' : 'mock/json/api/i18n/findMap.en.json')
  })
})
