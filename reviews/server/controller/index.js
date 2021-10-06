const model = require('../model');

module.exports = {
  runSelectReviewsData: (id, req, res) => {
    model.selectReviewsData(id, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  runSelectMetaData: (id, req, res) => {
    model.selectMetaData(id, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};
