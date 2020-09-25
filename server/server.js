/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
// const db = require('../database/index.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get(`/api/restaurants/photos/?${id}`, )

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
});
