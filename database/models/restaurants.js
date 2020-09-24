const mongoose = require('mongoose');

const photosSchema = require('./photos.js');

const { Schema } = mongoose;

const restaurantsSchema = new Schema({
  restaurant_id: { type: Number, required: true },
  name: { type: String, required: true },
  description: String,
  photos: {
    type: [photosSchema],
    default: undefined,
  },
});

module.exports = mongoose.model('Restaurants', restaurantsSchema);
