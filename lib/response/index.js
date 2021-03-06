// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

const path = require('path')
const fs = require('fs')

const {
  mkdirpSync,
  writeFileWithTemplate
} = require('../utils')

module.exports = (appPath, name) => {
  name = path.basename(name, '.js')
  const apiPath = path.join(appPath, 'src/responses/')
  const targetPath = path.join(apiPath, name) + '.js'

  mkdirpSync(apiPath)
  if ( !fs.existsSync(targetPath) ) {

    writeFileWithTemplate(
      targetPath,
      path.join(__dirname, 'template/response.js'),
      {
        name: name,
        createdAt: Date().toString()
      }
    )
    return Promise.resolve([`Response generated at ${targetPath}`])
  }
  return Promise.reject([`${targetPath} is existed.`])
}
