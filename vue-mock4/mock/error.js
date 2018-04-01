define([
  'xe-ajax-mock'
], function (XEAjaxMock) {
  XEAjaxMock.GET('api/**', {status: 404, body: {message: 'Services does not exist.'}})
  XEAjaxMock.POST('api/**', {status: 404, body: {message: 'Services does not exist.'}})
})
