import { GET, POST, DELETE } from 'xe-ajax-mock'

GET('api/role/list', require('./role/list.json'))
POST('api/role/update', require('./role/update.json'))
POST('api/role/insert', require('./role/insert.json'))
DELETE('api/role/delete/{id}', require('./role/delete.json'))
GET('api/role/page/list/{pageSize}/{currentPage}', require('./role/list/page.json'))

GET('api/user/list', require('./user/list.json'))
POST('api/user/update', require('./user/update.json'))
POST('api/user/insert', require('./user/insert.json'))
DELETE('api/user/delete/{id}', require('./user/delete.json'))
GET('api/user/page/list/{pageSize}/{currentPage}', require('./user/list/page.json'))

GET('api/i18n/list', (request, response) => {
  response.body = request.params.lang === 'zh' ? require('./i18n/findMap.zh.json') : require('./i18n/findMap.en.json')
  return response
})
