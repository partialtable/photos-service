/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

const Photos = require('./models/photos');

mongoose.connect('mongodb://localhost/photo-gallery');

const randomPhotoId = faker.random.uuid();
const randomImagePath = faker.image.imageUrl();
const randomDescription = faker.lorem.sentence();
const randomUserId = faker.random.uuid();
const randomUserAvatar = faker.image.avatar();

const photos = [
  new Photos({
    photo_id: randomPhotoId,
    photo_path: randomImagePath,
    photo_description: randomDescription,
    photo_category: 'Atmosphere',
    user_id: randomUserId,
    user_avatar_path: randomUserAvatar,
  }),
  new Photos({
    photo_id: randomPhotoId,
    photo_path: randomImagePath,
    photo_description: randomDescription,
    photo_category: 'Food',
    user_id: randomUserId,
    user_avatar_path: randomUserAvatar,
  }),
  new Photos({
    photo_id: randomPhotoId,
    photo_path: randomImagePath,
    photo_description: randomDescription,
    photo_category: 'Drink',
    user_id: randomUserId,
    user_avatar_path: randomUserAvatar,
  }),
  new Photos({
    photo_id: randomPhotoId,
    photo_path: randomImagePath,
    photo_description: randomDescription,
    photo_category: 'Atmosphere',
    user_id: randomUserId,
    user_avatar_path: randomUserAvatar,
  }),
  new Photos({
    photo_id: randomPhotoId,
    photo_path: randomImagePath,
    photo_description: randomDescription,
    photo_category: 'Food',
    user_id: randomUserId,
    user_avatar_path: randomUserAvatar,
  }),
  new Photos({
    photo_id: randomPhotoId,
    photo_path: randomImagePath,
    photo_description: randomDescription,
    photo_category: 'Drink',
    user_id: randomUserId,
    user_avatar_path: randomUserAvatar,
  }),
];

const exit = () => {
  mongoose.disconnect();
};

const savePhotos = () => {
  let done = 0;
  let i = 0;
  while (i < photos.length) {
    done += 1;
    if (done === photos.length) {
      exit();
    }
    photos[i].save()
      .then((result) => {
        console.log(`successfully saved ${result} to database`);
      })
      .catch((err) => {
        console.log(err);
      });
    i += 1;
  }
};

savePhotos(photos);

module.exports = {
  savePhotos,
};
