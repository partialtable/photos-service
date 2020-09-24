const mongoose = require('mongoose');

const { Schema } = mongoose;

const photosSchema = new Schema({
  photo_id: { type: Number, required: true },
  photo_path: { type: String, required: true },
  photo_description: String,
  photo_category: { type: String, require: true },
  user_id: { type: Number, required: true },
  user_avatar_path: { type: String, require: true },
});

module.exports = mongoose.model('Photos', photosSchema);
