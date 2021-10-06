const controller = require('../controller');

const router = (url, req, res) => {
  const id = req.query.product_id;
  console.log(url);
  if (url.includes('meta')) {
    console.log('got here');
    controller.runSelectMetaData(id, req, res);
  } else {
    controller.runSelectReviewsData(id, req, res);
  }
};

module.exports = router;
