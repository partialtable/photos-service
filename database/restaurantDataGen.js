const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

let restaurantId = 1750000;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      id: restaurantId,
      name: faker.company.companyName(0),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      stars: faker.random.number(5),
      cuisine: faker.random.arrayElement(['Chinese', 'Itaian', 'Mexican', 'American', 'Breakfast', 'Thai', 'Indian', 'Dumpling', 'Vegetarian', 'French', 'Barbecue', 'Greek', 'Fusion', 'Japanese', 'Korean', 'Vietnamese', 'Soul', 'Middle Eastern', 'Street']),
    };
    records.push(record);
    restaurantId += 1;
  }
  return records;
};

const csvWriter = writer({
  path: './postgreSQL/CSV/usersTable7.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'name' },
    { id: 'city', title: 'city' },
    { id: 'state', title: 'state' },
    { id: 'country', title: 'country' },
    { id: 'stars', title: 'stars' },
    { id: 'cuisine', title: 'cuisine' },
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
