import XEAjax from 'xe-ajax'
import XEMock from 'xe-ajax-mock'

// import mock api
import './setup'
import './json/api'
import './error'

XEAjax.use(XEMock)
