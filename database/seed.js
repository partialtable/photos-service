/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const model = require('./index.js');

mongoose.connect('mongodb://localhost/photo_gallery');

const Photos = model.PhotosModel;

const seeder = () => {

  for (let i = 1; i <= 100; i += 1) {
    photoData = {
      photo_id: i,
      photo_path: faker.image.imageUrl(); // to change later to s3 import
      photo_description: faker.lorem.sentence()
      photo_category:
      user_id:
      user_avatar_path:
    }
    let
  }
};

module.exports = {

};
