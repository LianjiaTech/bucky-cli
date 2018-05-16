const path = require('path')
const fs = require('fs')

const {
  mkdirpSync,
  walkFile,
  writeFileWithTemplate,
  tree
} = require('../utils')

const needToCompile = ['.js', '.json', '.md']
const defaultRegistry = 'https://registry.npmjs.com/'

module.exports = (targetPath, name) => {

  const templateDirPath = path.join(__dirname, 'template')
  const projectPath = path.join(targetPath, name)

  if (fs.existsSync(projectPath))
    return Promise.reject(`${projectPath} is existed.`)

  walkFile(templateDirPath, (filePath, type) => {
    const relativePath = path.relative(templateDirPath, filePath)
    const target = path.join(targetPath, name, relativePath)
    const { ext } = path.parse(target)

    mkdirpSync( path.dirname(target) )

    const data = needToCompile.indexOf(ext.toLowerCase()) === -1 ? null : {
      name: name,
      domain: name,
      createdAt: Date().toString(),
      coreVersion: require('../../package.json').coreVersion
    }
    writeFileWithTemplate(target, filePath, data)
  })

  console.log('\n' + tree(projectPath).split('\n').map(line => '  ' + line).join('\n'))

  return Promise.resolve([
    `Rroject generated at ${projectPath}\n`,
    'Run the following command to install',
    `> cd ${name} && npm i --registry=${defaultRegistry}\n`,
    'Then run Run the following command to lift',
    '> npm run dev\n'
  ])
}