const express = require('express')
const app = express()
let port = 3004
const path = require('path')

app.use('/', express.static(path.join(__dirname, '/../client/dist')))



app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`)
})