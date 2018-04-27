define([
  'xe-ajax-mock'
], function (XEMock) {
  XEMock

  // user api
  .JSONP('http://xuliangzhan.com/api/user/list', XEMock.require('mock/jsonp/xuliangzhan.com/api/user/list.json'))
  .JSONP('http://xuliangzhan.com/api/user/message', XEMock.require('mock/jsonp/xuliangzhan.com/api/user/message.json'))
})
