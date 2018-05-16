// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === prodction config ===
 *  线上环境会有 op 的配置，所有资源需要读取配置
 *
 *  created at: <%= createdAt %>
 */

import fs from 'fs'
import ini from 'ini'

// 获取 op 的配置项

const hostName = '<%= domain%>' // 设置为 项目域名 (op 那边申请)
const filePath = `/data0/www/htdocs/${hostName}/system/MATRIX_ENV_CONF`

const config = { base: {}, mysql: {}, redis: {} }

if (fs.existsSync(filePath)) {
  Object.assign(
    config,
    ini.parse(fs.readFileSync(filePath, 'utf-8'))
  )
}

export default config
