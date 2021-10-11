/* eslint-disable quotes */
module.exports = {
  reviewData: `
    WITH t_photos AS
      (SELECT review_id,
          json_agg( json_build_object('id', id, 'url', url)) AS pics
      FROM photos
      GROUP BY review_id
      ), t_results AS
      (SELECT reviews.id,
          reviews.product_id,
          reviews.rating,
          reviews.summary,
          reviews.recommend,
          reviews.response,
          reviews.body,
          reviews.date,
          reviews.reviewer_name,
          reviews.helpfulness,
          t_photos.pics
      FROM reviews
      INNER JOIN t_photos ON reviews.id = t_photos.review_id
      ORDER BY date DESC
      ) SELECT product_id AS product,
          json_agg( json_build_object(
            'review_id', id,
            'rating', rating,
            'summary', summary,
            'recommend', recommend,
            'response', response,
            'body', body,
            'date', current_timestamp,
            'reviewer_name', reviewer_name,
            'helpfulness', helpfulness,
            'photos', pics
          )) AS results
      FROM t_results
      WHERE product_id = $1
      GROUP BY product_id
    `,
  metaData: `
  `,
  insertReview: `
    WITH ins AS
      (INSERT INTO reviews
          (product_id, rating, date, summary, body, recommend, reviewer_name, reviewer_email)
      VALUES
        ($1, $2, current_timestamp, $3, $4, $5, $6, $7)
        RETURNING id
      ), t_arr AS
      (SELECT id AS review_id, unnest(array_agg($8)) AS url
      FROM ins
      ) INSERT INTO photos
        SELECT * FROM t_arr;
  `,
  update: {
    helpful: `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id = $1;`,
    report: `UPDATE reviews SET reported = 'true' WHERE id = $1;`,
  },
};

/*
WITH temp_rating AS
    (SELECT rating, COUNT(rating)
    FROM reviews
    WHERE product_id = $1
    GROUP BY rating
    ) SELECT json_object_agg(rating, COUNT) FROM temp_rating;
    `,
  recommendData: `
    WITH temp_recommend AS
    (SELECT reviews.recommend, COUNT(recommend)
    FROM reviews
    WHERE product_id = $1
    GROUP BY reviews.recommend
    ) SELECT json_object_agg(recommend, COUNT) FROM temp_recommend;
  `,
  characteristicsData: `
    WITH temp_c AS
    (SELECT reviews.product_id, reviews.id, reviews.rating, reviews.recommend, characteristics.name,
    characteristics_reviews.value FROM reviews inner join characteristics on reviews.product_id = characteristics.product_id
    inner join characteristics_reviews on characteristics_reviews.review_id = reviews.id
    ), averages AS
    (SELECT name, avg(value)
    FROM temp_c
    WHERE product_id = $1
    GROUP BY name
    ) SELECT (json_object_agg(name, avg)) FROM averages;
*/
