const model = require('../model');

module.exports = {
  run10Reviews: (req, res) => {
    model.select10Reviews((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
};
