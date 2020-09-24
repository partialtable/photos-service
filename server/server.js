const express = require('express')
const app = express()
let port = 3004
const path = require('path')

app.use('/', express.static(path.join(__dirname, '')))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`)
})