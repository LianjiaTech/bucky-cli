const path = require('path')
const fs = require('fs')

const {
  mkdirpSync,
  writeFileWithTemplate
} = require('../utils')

module.exports = (appPath, targetPath) => {

  const namespace = path.join('/', targetPath)

  const socketPath = path.join(appPath, 'src/sockets/')
  targetPath = path.join(socketPath, targetPath)

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
      path.join(__dirname, 'template/socket.js'),
      {
        namespace: namespace,
        createdAt: Date().toString()
      }
    )
    return Promise.resolve([`Socket generated at ${targetPath}`])
  }
  return Promise.reject([`${targetPath} is existed.`])
}