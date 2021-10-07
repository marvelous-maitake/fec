/* eslint-disable no-lonely-if */
const controller = require('../controller');

const router = (url, req, res) => {
  const urlArr = url.split('/');
  const id = req.query.product_id;
  const { body } = req;

  switch (req.method) {
    case 'POST':
      controller.runInsertReview(body, req, res);
      break;
    case 'PUT':
      controller.runPutUpdate(urlArr[3], urlArr[4], req, res);
      break;
    default:
      if (url.includes('meta')) {
        controller.runSelectMetaData(id, req, res);
      } else {
        controller.runSelectReviewsData(id, req, res);
      }
      /*
      is an object with the last two reviews based on date

      /reviews/?sort=${sortBy}&count=2&page=1&product_id=${id}
      `/reviews/?sort=${sortBy}&count=1000&page=1&product_id=${id}`
      */
  }
};

module.exports = router;
/*
/reviews/meta/?product_id=48432
/reviews/?sort=relevant&count=2&page=1&product_id=48432
/reviews/?sort=relevant&count=1000&page=1&product_id=48432

/reviews/meta/?product_id=48433
/reviews/?product_id=48433

/reviews/meta/?product_id=48434
/reviews/?product_id=48434

/reviews/meta/?product_id=48439
/reviews/?product_id=48439

/reviews/meta/?product_id=48438
/reviews/?product_id=48438
*/
