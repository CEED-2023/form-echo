const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port

import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.all('/ping', (req, res) => {
  res.send('Pong')
})

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
