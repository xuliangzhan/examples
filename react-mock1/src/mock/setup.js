import XEMock from 'xe-ajax-mock'

// mock defaults
XEMock.setup({
  template: true,
  pathVariable: true,
  timeout: '100-1000',
  error: true,
  log: true
})
