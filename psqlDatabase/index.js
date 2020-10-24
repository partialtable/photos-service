const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'app_user',
  database: 'restaurantphotos',
  password: '',
});

// client.connect((err) => {
//   if (err) {
//     console.error('connection error', err.stack);
//   } else {
//     console.log('connected');
//   }
// });

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack));
module.exports = client;
