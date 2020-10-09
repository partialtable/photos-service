/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');

// let isSeeded = false;

mongoose.connect('mongodb://localhost:27017/photo-gallery');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successful connection to MongoDB!');
});

const RestaurantSchema = mongoose.Schema({
  name: String,
  id: Number,
  photos: [Object],
}, { versionKey: false });

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);


// seedData();

const gatherPhotos = (restaurantId) => {
  return RestaurantModel.find({ id: restaurantId }).exec();
};

module.exports = {
  RestaurantModel,
  gatherPhotos,
};
