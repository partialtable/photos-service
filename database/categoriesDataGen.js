const faker = require('faker');

const writer = require('csv-writer').createObjectCsvWriter;

const csvList = (start, end) => {
  const records = [];
  for (let i = start; i <= end; i += 1) {
    const record = {
      id: Math.floor(Math.random() * (250000 - 1)) + 1,
      categories: faker.random.arrayElement(['Chinese', 'Itaian', 'Mexican', 'American', 'Breakfast', 'Thai', 'Indian', 'Dumpling', 'Vegetarian', 'French', 'Barbecue', 'Greek', 'Fusion', 'Japanese', 'Korean', 'Vietnamese', 'Soul', 'Middle Eastern', 'Street']),
    };
    records.push(record);
  }
  return records;
};

const csvWriter = writer({
  path: './database/postgreSQL/categoriesTable.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'categories', title: 'categories' },
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
