// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === rewrite config ===
 *  页面内容 url 匹配设置
 *
 *  created at: <%= createdAt %>
 */

export default [

  // rewrite 规则
  // 动态改变 url 让其走到对应的路由
  // 是 app 内部逻辑
  // 规则从上到下，如果匹配则不会再往下走了

  // from 可以是 正则，方法，字符串
  // 当url 被 正则匹配 或 方法返回非空 或 字符串匹配 minimatch
  // 如果是方法，第二个参数会额外给你请求头和辅助函数
  // 则会走到对应的 to
  // to 可以是字符串，也可以是方法
  // 如果是方法 参数接收 正则匹配的match值， 方法返回值， 字符串是否匹配的布尔值
  // 返回为 字符串

  // 当 break 为 true 时，如果匹配到当前条目则不会再往后匹配了

  // 在 to 中可以使用 $0 为原path,  $1, $2... 为 from 中选择的值

  // 这个例子是改写 页面图标 的路由
  { from: '/favicon.ico', to: '/public/favicon.ico', break: true },
  // { from: /^\/u\/([a-zA-Z0-9]+)\/?$/, to: '/?user=$1', break: true }
]
