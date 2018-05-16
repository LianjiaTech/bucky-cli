// Copyright(c) 2018 Lianjia, Inc.All Rights Reserved

/**
 *  === action ===
 *  route: /about
 *  created at: <%= createdAt %>
 */

export default {

  async handler (ctx) {
    //通过 ctx.request.user 获取用户信息
    const user = ctx.request.user

    // 渲染页面吧, about 是对应 view 文件夹下的文件
    ctx.response.render('about', { user })
  }
}
