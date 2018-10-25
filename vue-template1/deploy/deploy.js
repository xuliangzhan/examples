const pack = require('../package.json')
const XEUtils = require('xe-utils')
const chalk = require('chalk')
const { exec } = require('child_process')
const argvs = process.argv.slice(2)

function getParams (key) {
  let item = argvs.find(item => item.indexOf(key) > -1)
  return item ? item.split('=') : []
}

/**
 * 前端工程一键部署
 * 使用 WinSCP 工具
 *
 * 命令：npm run deploy u=root p=123456
 * 命令：npm run deploy
 */
let defOpts = {
  winSCP: 'C:\\Program Files (x86)\\WinSCP\\WinSCP.exe', // WinSCP安装目录
  serverAddr: '127.0.0.1', // 服务器IP
  serverPort: '22', // ftp、sftp端口
  // userName: null, // 服务器用户名
  // password: null, // 服务器密码
  type: 'sftp', // 传输协议ftp、sftp
  uploadPath: `/home/upload`, // 包上传存放目录
  websitePath: `/home/website/${pack.name}/www`, // 项目站点目录
  log: 'deploy/deploy.log' // 日志
}

function uploadDeploy (userName, password, serverAddr, serverPort) {
  if (!defOpts.type) {
    throw new Error(`The type cannot be empty. type=${defOpts.type}`)
  }
  if (!userName) {
    throw new Error(`The userName cannot be empty. userName=${userName}`)
  }
  if (!password) {
    throw new Error(`The password cannot be empty. password=${password}`)
  }
  if (!serverAddr) {
    throw new Error(`The serverAddr cannot be empty. serverAddr=${serverAddr}`)
  }
  if (!serverPort) {
    throw new Error(`The serverPort cannot be empty. serverPort=${serverPort}`)
  }
  if (!defOpts.websitePath) {
    throw new Error(`The websitePath cannot be empty. websitePath=${defOpts.websitePath}`)
  }
  let startTime = Date.now()
  let datetime = XEUtils.dateToString(startTime, 'yyyyMMddHHmmss')
  exec(`"${defOpts.winSCP}" /console /command "option confirm off" "open ${defOpts.type}://${userName}:${encodeURIComponent(password)}@${serverAddr}:${serverPort}" "option transfer binary" "call if [ ! -d ${defOpts.uploadPath} ];then mkdir ${defOpts.uploadPath}; fi" "call if [ ! -d ${defOpts.uploadPath}/${pack.name} ];then mkdir ${defOpts.uploadPath}/${pack.name}; fi" "cd ${defOpts.uploadPath}/${pack.name}" "put dist.zip" "call rm -rf ${defOpts.websitePath}" "call unzip dist.zip -d ${defOpts.websitePath}" "call if [ ! -d ${defOpts.uploadPath}/${pack.name}/history ];then mkdir ${defOpts.uploadPath}/${pack.name}/history; fi" "call mv dist.zip ${defOpts.uploadPath}/${pack.name}/history/${pack.name}_${pack.version}_${datetime}.zip" "exit" /log=${defOpts.log}`, (error, stdout, stderr) => {
    let dateDiff = XEUtils.getDateDiff(startTime, Date.now())
    let deployTime = `${String(dateDiff.HH).padStart(2, 0)}:${String(dateDiff.mm).padStart(2, 0)}:${String(dateDiff.ss).padStart(2, 0)}`
    if (error || deployTime === '00:00:00') {
      console.log(chalk.red(`\nDeployment error.\n`))
      console.log(`${chalk.magenta('Project Name')}: ${pack.name}\n${chalk.magenta('Server')}: ${defOpts.type}://${serverAddr}:${serverPort}\n${chalk.magenta('User Name')}: ${userName}\n${chalk.magenta('Project Path')}: ${defOpts.websitePath}\n${chalk.magenta('Deploy Time')}: ${deployTime}\n`)
      throw error
    } else {
      console.log(chalk.cyan(`\nDeployment success.\n`))
      console.log(`${chalk.green('Project Name')}: ${pack.name}\n${chalk.green('Server')}: ${defOpts.type}://${serverAddr}:${serverPort}\n${chalk.green('User Name')}: ${userName}\n${chalk.green('Project Path')}: ${defOpts.websitePath}\n${chalk.green('Deploy Time')}: ${deployTime}\n`)
      console.log(chalk.yellow(`You can now visit the website directly.\n`))
    }
  })
}

uploadDeploy(
  getParams('u')[1] || defOpts.userName,
  getParams('p')[1] || defOpts.password,
  getParams('addr')[1] || defOpts.serverAddr,
  getParams('port')[1] || defOpts.serverPort
)
