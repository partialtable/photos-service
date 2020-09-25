/* eslint-disable no-console */
const mongoose = require('mongoose');
const photosModel = require('./models/photos');
const seed = require('./seed');

mongoose.connect('mongodb://localhost/photo-gallery', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successful DB connection.');
  const Photos = photosModel;
  seed.savePhotos(Photos);
});
