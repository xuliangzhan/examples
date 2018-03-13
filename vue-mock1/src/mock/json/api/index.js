import { GET, POST, DELETE } from 'xe-ajax-mock'

GET('api/role/list', require('./role/list/data.json'))
POST('api/role/update', require('./role/update/data.json'))
POST('api/role/insert', require('./role/insert/data.json'))
DELETE('api/role/delete', require('./role/delete/data.json'))
GET('api/role/page/list/{pageSize}/{currentPage}', require('./role/page/list/data.json'))

GET('api/user/list', require('./user/list/data.json'))
POST('api/user/update', require('./user/update/data.json'))
POST('api/user/insert', require('./user/insert/data.json'))
DELETE('api/user/delete', require('./user/delete/data.json'))
GET('api/user/page/list/{pageSize}/{currentPage}', require('./user/page/list/data.json'))
