
const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')
const axios = require('axios')

const {errorMiddle} = require('./error')

const app = new Koa()
const router = new Router()

router.get('/exchange-token', async (ctx) => {
  const { query } = ctx
  const { data } = await axios.post('https://github.com/login/oauth/access_token', null, {
    params: query,
    headers: {Accept:' application/json'},
  })
  ctx.body = data
})



app.use(errorMiddle).use(cors()).use(router.routes()).use(router.allowedMethods())

module.exports = app
