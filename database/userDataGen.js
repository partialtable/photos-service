const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      id: Math.floor(Math.random() * (100000 - 1)) + 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      avatarPic: faker.image.imageUrl(),
    };
    records.push(record);
  }
  return records;
};

const csvWriter = writer({
  path: './database/postgreSQL/restaurantTable.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'firstName', title: 'firstName' },
    { id: 'lastName', title: 'lastName' },
    { id: 'username', title: 'username' },
    { id: 'avatarPic', title: 'avatarPic' },
  ],
});

const genStartEnd = csvList(1, 250000);

csvWriter.writeRecords(genStartEnd)
  .then(() => {
    console.log('CSV file created....');
  })
  .catch(() => {
    console.log('Error while creating csv file');
  });
