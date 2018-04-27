define([
  'xe-ajax-mock'
], function (XEAjaxMock) {
  XEAjaxMock

  // user api
  .JSONP('http://xuliangzhan.com/api/user/list', XEAjaxMock.require('mock/jsonp/xuliangzhan.com/api/user/list.json'))
  .JSONP('http://xuliangzhan.com/api/user/message', XEAjaxMock.require('mock/jsonp/xuliangzhan.com/api/user/message.json'))
})
