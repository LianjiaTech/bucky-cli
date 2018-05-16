// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === redirect config ===
 *  页面跳转规则配置
 *
 *  created at: <%= createdAt %>
 */

export default [

  // redirect 规则
  // 命中则 302 条转到目标
  // 规则从上到下，如果匹配则不会再往下走了

  // from 可以是 正则，方法，字符串
  // 如果是方法，第二个参数会额外给你请求头和辅助函数
  // 当url 被 正则匹配 或 方法返回非空 或 字符串匹配 minimatch
  // 则会走到对应的 to
  // to 可以是字符串，也可以是方法
  // 如果是方法 参数接收 正则匹配的match值， 方法返回值， 字符串是否匹配的布尔值
  // 返回为 字符串

  // 在 to 中可以使用 $0 为原path,  $1, $2... 为 from 中选择的值

  { from: '/redirect_to_index', to: '/' },
  // { from: /^\/u\/([a-zA-Z0-9]+)\/?$/, to: '/?user=$1' }
]
