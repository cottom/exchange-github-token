
const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')
const axios = require('axios')

const {errorMiddle} = require('./error')

const app = new Koa()
const router = new Router()

router.get('/exchange-token', async (ctx) => {
  const { query } = ctx
  console.log(query)
  const { data } = await axios.post('https://github.com/login/oauth/access_token', null, {
    params: query,
    headers: {Accept:' application/json'},
  })
  console.log(data)
  ctx.body = data
})



app.use(cors()).use(router.routes()).use(router.allowedMethods()).use(errorMiddle)

module.exports = app
