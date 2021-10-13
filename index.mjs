const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port


import express from 'express'
import echoFields from './echo.mjs'

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.all('/ping', (req, res) => {
  res.send('Pong')
})

app.all('/', (req, res) => {
  res.send(echoFields(req))
})

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
