// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

const fs = require('fs')
const path = require('path')
const child = require('child_process')

const program = require('commander')

const checkVersion = require('./check-version')
const { getAppPath } = require('./utils')

function logo () {
  console.log(`
   __                __
  |  |--.--.--.----.|  |--.--.--.
  |  _  |  |  |  __||    <|  |  |
  |_____|_____|____||__|__|___  |
                          |_____|
  with ♥︎ by lianjia-fe
  `)
}

module.exports = function main (argv) {
  checkVersion().then(() => commands(argv))
}

function commands (argv) {
  let matched = false

  const logMessage = (messages) => {
    logo()
    console.log(messages.map(msg => '  ' + msg).join('\n') + '\n')
  }

  const ok = logMessage
  const fail = logMessage

  program
    .version(require('../package.json').version)
    .usage('<command> <arg> [options]')

  program
    .command('new <name>')
    .description('新建 bucky 项目')
    .option('-d, --domain <domain>', '项目上线域名 op 配置')
    .action((name, { domain }) => {
      matched = true
      require('./new')(process.cwd(), name, domain)
        .then(message => ok(message))
        .catch(message => fail(message))
    })

  program
    .command('action <path>')
    .description('创建 bucky-action')
    .action((path) => {
      matched = true
      const appPath = getAppPath()
      if (appPath && checkAppPath(appPath) ) {
        require('./action')(appPath, path)
          .then(message => ok(message))
          .catch(message => fail(message))
      }
    })

  program
    .command('socket <path>')
    .description('创建 bucky-socket')
    .action((path) => {
      matched = true
      const appPath = getAppPath()
      if (appPath && checkAppPath(appPath) ) {
        require('./socket')(appPath, path)
          .then(message => ok(message))
          .catch(message => fail(message))
      }
    })

  program
    .command('api <name>')
    .description('创建 bucky-api')
    .action(name => {
      matched = true
      const appPath = getAppPath()
      if (appPath && checkAppPath(appPath) ) {
        require('./api')(appPath, name)
          .then(message => ok(message))
          .catch(message => fail(message))
      }
    })

  program
    .command('model <name>')
    .description('创建 bucky-model')
    .action(name => {
      matched = true
      const appPath = getAppPath()
      if (appPath && checkAppPath(appPath) ) {
        require('./model')(appPath, name)
          .then(message => ok(message))
          .catch(message => fail(message))
      }
    })

  program
    .command('response <name>')
    .description('创建 bucky-response')
    .action(name => {
      matched = true
      const appPath = getAppPath()
      if (appPath && checkAppPath(appPath) ) {
        require('./response')(appPath, name)
          .then(message => ok(message))
          .catch(message => fail(message))
      }
    })

  program
    .command('service <name>')
    .description('创建 bucky-service')
    .action(name => {
      matched = true
      const appPath = getAppPath()
      if (appPath && checkAppPath(appPath) ) {
        require('./service')(appPath, name)
          .then(message => ok(message))
          .catch(message => fail(message))
      }
    })

  program.parse(argv)
  if (matched !== true) {
    const appPath = getAppPath()
    if (appPath) checkAppPath(appPath)
    logo()
    program.help()
  }
}

function checkAppPath (appPath) {
  if (!appPath) return notFound()
  const pkg = require(path.join(appPath, 'package.json'))

  const coreVersion = pkg.dependencies['@lianjia/ljbucky-core']
  const needCoreVersion = require('../package.json').coreVersion

  if ( !coreVersion ) return noBucky()
  if (coreVersion !== needCoreVersion) {
    console.log('\n  ' +
      `New version of ljbucky-core available ${coreVersion} -> ${needCoreVersion}\n  ` +
      `Please upgrade ljbucky-core's version in "packge.json" file and reinstall`
    )
  }
  return true

  function notFound () {
    console.log('\n  not found package.json')
  }

  function noBucky () {
    console.log('\n  not found application base on ljbucky-core')
  }
}
