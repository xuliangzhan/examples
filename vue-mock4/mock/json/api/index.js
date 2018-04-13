define([
  'xe-ajax-mock'
], function (XEAjaxMock) {
  XEAjaxMock

  // role api
  .GET('api/role/list', XEAjaxMock.require('mock/json/api/role/list.json'))
  .POST('api/role/update', XEAjaxMock.require('mock/json/api/role/update.json'))
  .POST('api/role/insert', XEAjaxMock.require('mock/json/api/role/insert.json'))
  .DELETE('api/role/delete/{id}', XEAjaxMock.require('mock/json/api/role/delete.json'))
  .GET('api/role/page/list/{pageSize}/{currentPage}', XEAjaxMock.require('mock/json/api/list/page.json'))

  // user api
  .GET('api/user/list', XEAjaxMock.require('mock/json/api/user/list.json'))
  .POST('api/user/update', XEAjaxMock.require('mock/json/api/user/update.json'))
  .DELETE('api/user/delete/{id}', XEAjaxMock.require('mock/json/api/user/delete.json'))
  .GET('api/user/page/list/{pageSize}/{currentPage}', XEAjaxMock.require('mock/json/api/user/list/page.json'))
  .POST('/api/user/insert', XEAjaxMock.require('mock/json/api/user/insert.json'))

  // i18n api
  .GET('api/i18n/list', function (request, response) {
    return response.require(request.params.lang === 'zh' ? 'mock/json/api/i18n/findMap.zh.json' : 'mock/json/api/i18n/findMap.en.json')
  })
})
