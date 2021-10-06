const db = require('../../database');
const select = require('./select.js');

module.exports = {
  selectReviewsData: (id, callback) => {
    db.query(select.reviewData, [id], (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  selectMetaData: (id, callback) => {
    db.query(select.ratingData, [id], (err1, rating) => {
      if (err1) {
        callback(err1, null);
      } else {
        db.query(select.recommendData, [id], (err2, recommend) => {
          if (err2) {
            callback(err2, null);
          } else {
            db.query(select.characteristicsData, [id], (err3, characteristic) => {
              const data = {
                product_id: id,
                ratings: rating.rows[0].json_object_agg,
                recommended: recommend.rows[0].json_object_agg,
                characteristics: characteristic.rows[0].json_object_agg,
              };
              if (err3) {
                callback(err3, null);
              } else {
                callback(data);
              }
            });
          }
        });
      }
    });
  },
};
