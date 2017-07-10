const router = require('koa-router')()
const api = require('./api')

router.use(api.routes(), api.allowedMethods())

module.exports = router
