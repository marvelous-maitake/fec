const { Client } = require('pg');
const { USER, PASSWORD } = require('../../server/config.js');

const connection = new Client({
  host: '127.0.0.1',
  user: USER,
  port: 5432,
  // password: PASSWORD,
  database: 'sdc_reviews_ratings',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

module.exports = connection;
