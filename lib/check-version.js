// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

const { pkgRaw } = require('./utils')
const pkg = require('../package.json')

const registry = 'https://registry.npmjs.com'

module.exports = () => pkgRaw( pkg.name, registry ).then(raw => {

  const latest = raw['dist-tags'].latest
  if (pkg.version === latest) return

  console.log(`
  New version of bucky-cli available ${pkg.version} -> ${latest}
  Run the following command to update
  > npm i ${pkg.name} -g --registry=${registry}
  `)

}).catch( err => console.log(err) )
