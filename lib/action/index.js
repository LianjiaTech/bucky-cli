// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

const path = require('path')
const fs = require('fs')

const {
  mkdirpSync,
  writeFileWithTemplate
} = require('../utils')

module.exports = (appPath, targetPath) => {

  const route = path.join('/', targetPath)

  const actionPath = path.join(appPath, 'src/actions/')
  targetPath = path.join(actionPath, targetPath)

  if (targetPath[targetPath.length - 1] === '/') {
    targetPath = path.join(targetPath, 'index.js')
  } else {
    const {dir, name} = path.parse(targetPath)
    targetPath = path.join(dir, name + '.js')
  }

  if ( !fs.existsSync(targetPath) ) {

    mkdirpSync(path.dirname(targetPath))

    writeFileWithTemplate(
      targetPath,
      path.join(__dirname, 'template/action.js'),
      {
        route: route,
        createdAt: Date().toString()
      }
    )
    return Promise.resolve([`Action generated at ${targetPath}`])
  }
  return Promise.reject([`${targetPath} is existed.`])
}
