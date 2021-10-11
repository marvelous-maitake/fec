/* eslint-disable camelcase */
const model = require('../model');

module.exports = {
  runSelectReviewsData: (req, res) => {
    const { count, page, product_id } = req.query.product_id;

    model.selectReviewsData(product_id, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  runSelectMetaData: (req, res) => {
    const { count, page, product_id } = req.query.product_id;

    model.selectMetaData(product_id, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  runInsertReview: (review, req, res) => {
    model.insertReview(review, (err) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.sendStatus(201);
      }
    });
  },

  runPutUpdate: (id, toUpdate, req, res) => {
    model.runPutUpdate(id, toUpdate, (err) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201);
      }
    });
  },
};
