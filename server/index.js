require('newrelic');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
const port = 2500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', (req, res) => {
  res.send('hello');
});

app.get('/api/restaurant/:id', controller.getRestaurant);

app.get('/api/restaurants/:id/photos', controller.getRestaurantPhotos);
app.get('/api/restaurants/:id/category/:category/photos', controller.photosByCategory);

app.post('/api/restaurant', controller.addRestaurant);
app.post('/api/restaurants/photos', controller.addPhotos);

app.patch('/api/restaurants/photos', controller.updatePhoto);
app.delete('/api/restaurants/:id/photos', controller.removePhoto);

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
});
