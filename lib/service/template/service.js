/**
 *  === service ===
 *  name: <%= name %>
 *  created at: <%= createdAt %>
 */

// 优先级
// 默认 bucky 内部都是在 100 这个优先级
export const index = 100

export default config => {
  // config 会读取在 services/ 下的同名文件

  return async (ctx, next) => {

    // 这边是一个 koa 中间件的编写

    // ctx 为 koa 的 context 上下文
    // 详见: http://koajs.com/#context

    // ctx.request  为 koa request 对象
    // 详见: http://koajs.com/#request

    // ctx.response 为 koa response 对象
    // 详见: http://koajs.com/#response

    next()
  }
}