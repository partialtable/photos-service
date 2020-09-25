/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const model = require('./index.js');
// const data = require('./generatePhotoData.js');

// mongoose.connect('mongodb://localhost/photo_gallery');

const Photos = model.PhotosModel;

const photoUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/';

const avatarUrl = 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Avatar_Images/';

const myWordList = [
  'seafood', 'sushi', 'cocktails',
  'desserts', 'wafer', 'bar scene',
  'sesame', 'pizza', 'patio',
  'pie', 'bar', 'beer', 'crab legs', 'kitchen',
  'service', 'small plates', 'portions', 'seating',
  'large parties', 'comfortable', 'delicious',
  'greasy', 'televisions', 'bar seating', 'quiet',
  'vibrant', 'outdoor seating', 'aroma', 'open kitchen',
];
const randomDescription1 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)} ${faker.random.arrayElement(myWordList)}`;
const randomDescription2 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;
const randomDescription3 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)} ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;
const randomDescription4 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)} ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;
const randomDescription5 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;
const randomDescription6 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;
const randomDescription7 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;
const randomDescription8 = `${faker.random.arrayElement(myWordList)},  ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}, ${faker.random.arrayElement(myWordList)}`;

const possibleDescriptions = [randomDescription1, randomDescription2,
  randomDescription3, randomDescription4, randomDescription5, randomDescription6,
  randomDescription7, randomDescription8,
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
  for (let i = 1; i <= 40; i += 1) {
    const photoData = {
      photo_id: i,
      photo_path: randomPhotoUrl,
      photo_description: faker.random.arrayElement(possibleDescriptions),
      photo_date: faker.date.past(),
      photo_category: faker.random.arrayElement(categories),
      user_id: faker.random.number(),
      user_avatar_path: randomAvatarUrl,
    };
    const photos = new Photos(photoData);
    photos.save(() => {
      if (i === 40) {
        mongoose.disconnect();
      }
    });
  }
};

seeder();

module.exports = {
  seeder,
};
