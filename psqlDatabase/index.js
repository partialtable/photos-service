const { Client } = require('pg');


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
