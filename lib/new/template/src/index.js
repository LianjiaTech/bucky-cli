// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === <%= name %> ===
 *
 *  created at: <%= createdAt %>
 */

`
   __                __
  |  |--.--.--.----.|  |--.--.--.
  |  _  |  |  |  __||    <|  |  |
  |_____|_____|____||__|__|___  |
                          |_____|
  with ♥︎ by lianjia-fe
`

require('babel-polyfill')

if (require('path').basename(__dirname) === 'src') {
  require('babel-core/register')({ presets: ["es2015", "stage-0"] })
}

const app = require('@lianjia/ljbucky-core')(__dirname)

app.lift()
