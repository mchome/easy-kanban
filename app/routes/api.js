const router = require('koa-router')()

const routes = router
  .get('/api', async(ctx, next) => {
    ctx.response.body = apiDetail
  })

const apiDetail = {
  '/api': 'this help'
}

module.exports = routes
