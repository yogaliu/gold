const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors');
const convert = require('koa-convert');
const api = require('./routes/api');
const app = new Koa()

// 进行requestbody解析
app.use(bodyParser())
// 加入路由
app.use(router.routes())
// 处理跨域
app.use(convert(cors()))
// 路由处理，在api中
app.use(api.routes(), api.allowedMethods())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.host || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
