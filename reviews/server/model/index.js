const db = require('../../database');

module.exports = {
  select10Reviews: (callback) => {
    const select = 'SELECT * FROM reviews LIMIT 10';
    db.query(select, (err, data) => {
      const { rows } = data;
      if (err) {
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  },
};
