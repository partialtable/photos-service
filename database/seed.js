/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const model = require('./index.js');

mongoose.connect('mongodb://localhost/photo_gallery');

const Photos = model.PhotosModel;

const photoUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/';

const avatarUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Avatar_Images/';

const myWordList = [
  'seafood', 'sushi', 'cocktails',
  'desserts', 'wafer', 'bar scene',
  'sesame', 'pizza', 'patio',
  'pie', 'bar', 'beer', 'crab legs', 'kitchen',
  'service', 'small plates', 'portions',
];

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

function getRandomIntInclusive(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

const randomPhotoIndex = getRandomIntInclusive(0, 40);

const randomPhotoUrl = `${photoUrl}${randomPhotoIndex}.png`;

const randomAvatarIndex = getRandomIntInclusive(0, 12);

const randomAvatarUrl = `${avatarUrl}${randomAvatarIndex}.png`;

const seeder = () => {
  for (let i = 1; i <= 100; i += 1) {
    const photoData = {
      photo_id: i,
      photo_path: randomPhotoUrl,
      photo_description: faker.lorem.sentence(myWordList),
      photo_date: faker.date.past(),
      photo_category: faker.random.arrayElement(categories),
      user_id: faker.random.uuid(),
      user_avatar_path: randomAvatarUrl,
    };
    const photos = new Photos(photoData);
    photos.save(() => {
      if (i === 100) {
        mongoose.disconnect();
      }
    });
  }
};

seeder();

module.exports = {
  seeder,
};
