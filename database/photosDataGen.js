const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const restaurantId = 0;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      id: restaurantId + 1,
      url: faker.random.companyName(0),
      description: faker.address.city(),
      userId: Math.floor(Math.random() * (100000 - 1)) + 1,
      categoryId: Math.floor(Math.random() * (100 - 1)) + 1,
      restaurantId: Math.floor(Math.random() * (250000 - 1)) + 1,
    };
    records.push(record);
  }
  restaurantId = 249,999;
  return records;
};

const csvWriter = writer({
  path: './database/postgreSQL/usersTable.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'url', title: 'url' },
    { id: 'description', title: 'description' },
    { id: 'userId', title: 'userId' },
    { id: 'categoryId', title: 'categoryId' },
    { id: 'restaurantId', title: 'restaurantId' },
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
