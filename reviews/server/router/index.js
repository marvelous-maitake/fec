/* eslint-disable no-lonely-if */
const controller = require('../controller');

const router = (urlArr, req, res) => {
  const { body } = req;

  switch (req.method) {
    case 'GET':
      if (urlArr[1] === 'meta') {
        controller.runSelectMetaData(req, res);
      } else {
        controller.runSelectReviewsData(req, res);
      }
      /*
      is an object with the last two reviews based on date

      /reviews/?sort=${sortBy}&count=2&page=1&product_id=${id}
      `/reviews/?sort=${sortBy}&count=1000&page=1&product_id=${id}`
      */
      break;
    case 'POST':
      controller.runInsertReview(body, req, res);
      break;
    case 'PUT':
      controller.runPutUpdate(urlArr[1], urlArr[2], req, res);
      break;
    default:
      res.status(404).send('Could not complete request for reviews');
  }
};

module.exports = router;
