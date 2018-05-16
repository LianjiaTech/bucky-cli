// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === action ===
 *  route: <%= route %>
 *  created at: <%= createdAt %>
 */

export default {

  // csrf 作用是判断来访者身份，如果是 false 不会判断
  // 默认操作是，如果是 post, put, delete 操作，并且 来访者 域名和当前域名不匹配则会拒绝访问
  // 如果 csrf 为 字符串 或者 字符串 数组（可以是minimatch），则相当于设置白名单，白名单中的会被认可
  // csrf: false,
  // csrf: [
  //  '*.lianjia.com',    // minimatch
  //  'aaa.lianjia.com',  // 域名
  //  '*',  // 匹配所有
  //  ''    // 允许 空 referer
  //  ],


  // cors 是否允许 异步跨域访问
  // cors: '*',
  // cors: 'http://lianjia.com',
  // cors: {
  //  origin: 'http://lianjia.com',
  //  methods: 'GET, POST',
  //  Headers: 'X-Requested-With'
  // },

  // 是否页面需要登陆 默认需要登陆
  // 具体逻辑在 configs/action 的 beforeHandler 中体现
  // needLogin: false,

  // 如果路由命中则会走这个方法
  // 可以在 rewrite redirect 修改路由指向
  async handler (ctx) {

    // ctx 为 koa 的 context 上下文
    // 详见: http://koajs.com/#context

    // ctx.request  为 koa request 对象
    // 详见: http://koajs.com/#request

    // ctx.response 为 koa response 对象
    // 详见: http://koajs.com/#response

    // 使用 ctx.request.query 获取 url query 参数
    // 使用 ctx.request.body 获取通过 x-www-form-urlencoded 方式提交的 body
    // 使用 ctx.request.form 获取 formData 方式提交的 form 表单

    // 使用 ctx.user 获取当前用户信息 (登陆的情况下)
    // 使用 ctx.isAppWebView() 可以获取到是否在 link 或者 掌链 中

    // 使用 API.xxx, Model.xxx 调用 api model 中声明的 接口 和 类

    // 使用 ctx.render 渲染模版
    // 默认使用 ejs, 可以在 config/view 中设置
    // ctx.render('index', { title: 'bucky' })

    // 页面未找到
    // ctx.notFound()

    // 页面无权限
    // ctx.forbidden()

    // 页面跳转
    // ctx.redirect('http://lianjia.com')

    // 页面跳转(使用js方式)
    // ctx.redirect('http://lianjia.com', {viaJavascript: true})

    // 系统错误，并且报错
    // ctx.serverError(new Error('server error'))

    // ajax 返回
    // ctx.ajax({greeting: 'hello world'})

    // ajax 返回异常
    // ctx.ajax(null, {error: true, message: '加载失败'})
  },

  // 如果 handler 代码出错，可以在 catchError 中捕获处理错误
  // 如果没有 catchError, 则会自动抛 500 错误，并返回错误内容
  // async catchError (ctx, error) { },
}
