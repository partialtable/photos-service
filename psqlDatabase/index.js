const { Client } = require('pg');
const psql = require('../.env/config.js');

const client = new Client({
  host: psql.host,
  port: psql.port,
  user: psql.user,
  database: psql.database,
  password: psql.password,
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
