const faker = require('faker');

module.exports = {
  photoUrl: 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/',

  avatarUrl: 'https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Avatar_Images/',

  myWordList: [
    'seafood', 'sushi', 'cocktails',
    'desserts', 'wafer', 'bar scene',
    'sesame', 'pizza', 'patio',
    'pie', 'bar', 'beer', 'crab legs', 'kitchen',
    'service', 'small plates', 'portions', 'seating',
    'large parties', 'comfortable', 'delicious',
    'greasy', 'televisions', 'bar seating', 'quiet',
    'vibrant', 'outdoor seating', 'aroma', 'open kitchen',
  ],
  randomDescription1: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription2: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription3: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription4: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription5: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription6: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription7: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,
  randomDescription8: `${faker.random.arrayElement(this.myWordList)},  ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)}, ${faker.random.arrayElement(this.myWordList)} ${faker.random.arrayElement(this.myWordList)}`,

  possibleDescriptions: [this.randomDescription1, this.randomDescription2,
    this.randomDescription3, this.randomDescription4,
    this.randomDescription5, this.randomDescription6,
    this.randomDescription7, this.randomDescription8,
  ],

  categories: ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'],

  getRandomIntInclusive(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  },

  randomPhotoIndex: this.getRandomIntInclusive(0, 40),

  randomPhotoUrl: `${this.photoUrl}${this.randomPhotoIndex}.png`,

  randomAvatarIndex: this.getRandomIntInclusive(0, 12),

  randomAvatarUrl: `${this.avatarUrl}${this.randomAvatarIndex}.png`,
};
