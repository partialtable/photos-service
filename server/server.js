/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
// const axios = require('axios');
const db = require('../database/index.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

const gatherPhotos = () => {
  console.log('Made it inside gatherPhotos');
  return db.RestaurantModel.find({});
};

app.get('/api/restaurants/photos', (req, res) => {
  console.log('Made it to GET route');
  gatherPhotos()
    .then((response) => {
      console.log('Made it all the way inside to .then, response: ', response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
});
