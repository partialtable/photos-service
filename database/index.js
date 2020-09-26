/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/photo-gallery');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successful connection to MongoDB!');
});

// const photosSchema = mongoose.Schema({
//   photo_id: Number,
//   photo_path: String,
//   photo_description: String,
//   photo_date: Date,
//   photo_category: String,
//   user_id: Number,
//   user_avatar_path: String,
// });

// const PhotosModel = mongoose.model('Photos', photosSchema);

// const getAllPhotos = () => { Photos.find({}).exec(); };
// getAllPhotos();

// // export get requests
// module.exports = {
//   PhotosModel,
// };

const RestaurantSchema = mongoose.Schema({
  name: String,
  restaurant_id: Number,
  photos: [Object],
}, { versionKey: false });

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

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

const restaurantNames = [
  'Grill', 'Bar', 'Steakhouse',
  'Villa', 'Seafood', 'Pizza',
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

const generatePhotosArray = () => {
  const result = [];
  const length = 5 + Math.floor(Math.random() * (10));
  for (let i = 1; i < length; i += 1) {
    result.push({
      photo_id: i,
      url_path: randomPhotoUrl,
      description: faker.random.arrayElement(possibleDescriptions),
      date: faker.date.past(),
      category: faker.random.arrayElement(categories),
      user_id: faker.random.number(),
      user_avatar_path: randomAvatarUrl,
    });
  }
  // console.log('Results array of photos: ', result);
  return result;
};

const seedData = () => {
  const photos = [];
  for (let i = 1; i <= 100; i += 1) {
    const photoObj = {};
    photoObj.photos = generatePhotosArray();
    // console.log(photoObj.photos);
    photos.push(photoObj);
    // console.log(photos);
    const restaurantData = new RestaurantModel(photos);
    restaurantData.restaurant_id = i;
    restaurantData.name = `${faker.name.firstName()}'s ${faker.random.arrayElement(restaurantNames)}`;
    restaurantData.save(() => {
      if (i === 100) {
        mongoose.disconnect();
      }
    });
  }
};

seedData();

module.exports.RestaurantModel = RestaurantModel;
