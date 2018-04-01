define([
  'xe-ajax-mock'
], function (XEAjaxMock) {
  XEAjaxMock
  .JSONP('http://xuliangzhan.com/api/user/list', function (request, response) {
    return response.require('mock/jsonp/xuliangzhan.com/api/user/list.json')
  })
  .JSONP('http://xuliangzhan.com/api/user/message', function (request, response) {
    return response.require('mock/jsonp/xuliangzhan.com/api/user/message.json')
  })
})
