import XEAjax from 'xe-ajax'
import XEAjaxMock from 'xe-ajax-mock'

// import mock api
import './setup'
import './json/api'
import './error'

XEAjax.use(XEAjaxMock)
