// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

const path = require('path')
const fs = require('fs')

const {
  mkdirpSync,
  writeFileWithTemplate
} = require('../utils')

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (appPath, name) => {
  name = path.basename(capitalizeFirstLetter(name), '.js')
  const apiPath = path.join(appPath, 'src/models/')
  const targetPath = path.join(apiPath, name) + '.js'

  mkdirpSync(apiPath)
  if ( !fs.existsSync(targetPath) ) {

    writeFileWithTemplate(
      targetPath,
      path.join(__dirname, 'template/model.js'),
      {
        name: name,
        createdAt: Date().toString()
      }
    )
    return Promise.resolve([`Model generated at ${targetPath}`])
  }
  return Promise.reject([`${targetPath} is existed.`])
}
