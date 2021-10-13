const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port

import express from 'express'
const app = express()

app.get('/ping', (req, res) => {
  res.send('Pong')
})

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
