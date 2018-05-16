// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === api ===
 *  api: <%= name %>
 *  created at: <%= createdAt %>
 */

export default api => {

  api.config = {
    // 接口超时时间
    timeout: 10000,

    // 默认的返回值简单约定， {code: , data:, msg:} 的形式返回
    // 如果是这种返回形式的话，那么通过下面参数，做接口检查
    codeKey: 'code',
    dataKey: 'data',
    messageKey: 'msg',

    // 可以使用以下方法 处理 api 请求前的数据
    // requestHandler () {}

    // 可以使用以下方法 处理 api 返回的数据
    // responseHandler () {}

    // 当 [codeKey] === [successCode] 是认为请求成功
    successCode: 100000,

    // 接口的协议，域名，端口
    base: 'http://<domain>:[port]',

    // 上行格式 可以是:
    // application/x-www-form-urlencoded
    // multipart/form-data
    // application/json
    // 等等
    // contentType: 'application/x-www-form-urlencoded'
  }

  // 定义接口: api的设置是在 config 配置的基础上
  // 如果api内部没有指定字段，则直接复用 config 中的内容
  api('__api_name__', {

    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的model中uriReplacer 参数设置
    uri: 'i/{am}/a/path',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },

    // 是否使用缓存
    // 简单的缓存设置， 写使用的 redis 名即可
    // cache: 'cache',
    // 如果想自定义，可以使用下面的
    // cache: {
    //   redis: 'cache',
    //   key: req => req.method === 'GET' ? req.uri : null,
    //   fromCache: cache => JSON.parse(cache),
    //   toCache: data => JSON.stringify(data)
    // }
  })

  // api(....) 继续定义下一个接口
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = api => {}

// 测试环境配置
export const testing = api => {}
