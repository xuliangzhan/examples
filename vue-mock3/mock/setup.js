define([
  'xe-ajax-mock'
], function (XEAjaxMock) {
  // mock defaults
  XEAjaxMock.setup({
    template: true,
    pathVariable: 'auto',
    timeout: '100-1000',
    error: true,
    log: true
  })
})
