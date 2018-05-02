const pack = require('../package.json')
const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const XEUtils = require('xe-utils')

const datetime = XEUtils.dateToString(Date.now(), 'yyyyMMddHHmmss')
const argvs = process.argv.slice(2)
const plugins = []

if (argvs.includes('zip')) {
  plugins.push(new FileManagerPlugin({
    onEnd: {
      delete: [
        path.join(__dirname, '../uk-mobile_*.zip')
      ],
      archive: [{
        source: path.join(__dirname, '../dist'),
        destination: path.join(__dirname, `../${pack.name}_${datetime}.zip`)
      }]
    }
  }))
}

module.exports = plugins