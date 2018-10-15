import express from 'express'
import path from 'path'
import morgan from 'morgan'
import forceSSL from 'express-force-ssl'

const PORT = 2500
const {PWD} = process.env
const app = express()
app.use(morgan('dev'))

if (process.env.FORCE_SSL === 'true') {
  app.set('forceSSLOptions', { trustXFPHeader: true })
  app.use(forceSSL)
}

app.use(express.static(path.resolve(PWD, './public')))
const port = process.env.PORT || PORT

app.listen(port, () => {
  console.log(`demo pwa_ui listening on port ${port}!`)
})
