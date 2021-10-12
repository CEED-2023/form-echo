const PORT = 3000

import express from 'express'
const app = express()

app.get('/ping', (req, res) => {
  res.send('Pong')
})

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
