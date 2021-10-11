/* eslint-disable camelcase */
/* eslint-disable import/extensions */
const db = require('../../database');
const { reviewData, metaData, insertReview, update } = require('./queries.js');

module.exports = {
  selectReviewsData: (id, callback) => {
    db.query(reviewData, [id], (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data.rows);
      }
    });
  },

  selectMetaData: (id, callback) => {
    db.query(metaData, [id], (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data.rows);
      }
    });
  },
  insertReview: (review, callback) => {
    let photosStr = '';
    let charStr = '';
    let charRevStr = '';
    const {
      product_id, rating, summary, body, recommend, name, email, photos, characteristics,
    } = review;
    const charKeys = Object.keys(characteristics); // characteristics
    const charValues = Object.values(characteristics); // characteristics_reviews value

    photos.forEach((url) => {
      photosStr += (`(id, ${url}), `);
    });
    photosStr = `${photosStr.slice(0, photosStr.length - 3)})`;

    charKeys.forEach((charName) => {
      charRevStr += (`product_id, ${charName}), `);
    });

    charStr = `${charStr.slice(0, charStr.length - 3)})`;
    console.log(charStr);

    charValues.forEach((value) => {
      charRevStr += (`(id, ${value}), `);
    });
    charRevStr = `${charRevStr.slice(0, charRevStr.length - 3)})`;
    console.log(charRevStr);

    // db.query(insertReview, [product_id, rating, summary, body, recommend, name, email, photosStr, charStr, charRevStr], (err) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     callback(null);
    //   }
    // });
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
