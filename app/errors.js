// error middleware

const errors = () => {
  return async(ctx, next) => {
    ctx.response.status = ctx.status
    if (ctx.status === 404) {
      ctx.response.body = {'error': 'route', 'info': 'request not match'}
    } else if (ctx.status >= 400 && ctx.status <= 599) {
      ctx.response.body = {'error': 'mise', 'info': 'response unable'}
    } else {
      await next()
    }
  }
}

module.exports = errors
