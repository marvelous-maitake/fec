const controller = require('../controller');

const router = (url, req, res) => {
  const option = 'time';
  switch (option) {
    case 'reviews/meta':
      // run function
      break;
    default:
      controller.run10Reviews(req, res);
  }
};

module.exports = router;
