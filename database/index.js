/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/photo-gallery');

const db = mongoose.connection;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successful connection to MongoDB!');
});

const photosSchema = mongoose.Schema({
  photo_id: Number,
  photo_path: String,
  photo_description: String,
  photo_date: Date,
  photo_category: String,
  user_id: Number,
  user_avatar_path: String,
});

const PhotosModel = mongoose.model('Photos', photosSchema);

module.exports = {
  PhotosModel,
};
