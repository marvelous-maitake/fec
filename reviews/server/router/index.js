const controller = require('../controller');

const router = (url, req, res) => {
  console.log(req.query);
  const option = url;
  switch (option) {
    case 'reviews/meta':
      // run function
      break;
    default:
      controller.runSelect10Reviews(req, res);
  }
};

module.exports = router;
