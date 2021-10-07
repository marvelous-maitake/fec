/* eslint-disable import/extensions */
const db = require('../../database');
const { select, insert, update } = require('./queries.js');

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
  insertReview: (review, callback) => {
    const {
      product_id, rating, summary, body, recommend, name, email, photos, characteristics
    } = review;
    const ts = Math.round((new Date()).getTime() / 1000);

    db.query(insert.review, (err1) => {
      if (err1) {
        callback(err1, null);
      } else {
        db.query(insert.photos, (err2) => {
          if (err2) {
            callback(err2, null);
          } else {
            db.query(insert.characteristics, (err3) => {
              if (err3) {
                callback(err3, null);
              } else {
                module.exports.selectReviewsData(product_id, (err4, data) => {
                  if (err4) {
                    callback(err4, null);
                  } else {
                    callback(null, data);
                  }
                });
              }
            });
          }
        });
      }
    });
  },

  putUpdate: (id, toUpdate, callback) => {
    if (toUpdate === 'helpful') {
      db.query(update.helpful, [id], (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      });
    }
    if (toUpdate === 'report') {
      db.query(update.report, [id], (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      });
    }
  },
};
