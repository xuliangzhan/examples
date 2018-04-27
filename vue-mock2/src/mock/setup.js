import XEMock from 'xe-ajax-mock'

// mock defaults
XEMock.setup({
  template: true,
  pathVariable: 'auto',
  timeout: '100-1000',
  error: true,
  log: true
})
