define([
  'xe-ajax-mock'
], function (XEMock) {
  // mock defaults
  XEMock.setup({
    template: true,
    pathVariable: 'auto',
    timeout: '100-1000',
    error: true,
    log: true
  })
})
