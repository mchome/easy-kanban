const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const routers = require('./routes')
const errors = require('./errors')
// const history = require('./historyapi')
const config = require('./config')

const app = new Koa()

app.use(bodyparser())
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`)
  await next()
})
app.use(routers.routes()).use(routers.allowedMethods())
app.use(errors())
// app.use(history())

app.listen(config.port)
console.log('app started at port ' + config.port + '...')
