module.exports = {
  reviewData: `
    WITH photo AS
    (SELECT review_id, json_agg( json_build_object(
      'id', id,
      'url', url,
      'review_id', review_id
    )) AS photos
    FROM photos
    GROUP BY review_id
    )
    ,results AS (
      SELECT product_id,
        json_agg( json_build_object(
          'review_id', r.id,
          'rating', r.rating,
          'summary', r.summary,
          'recommend', r.recommend,
          'response', r.response,
          'body', r.body,
          'date', r.created_at,
          'reviewer_name', r.reviewer_name,
          'helpfulness', r.helpfulness,
          'photos', p.photos
        )) AS results
        FROM reviews r
        LEFT JOIN photo p
        ON r.id = p.review_id
        WHERE product_id = $1
        GROUP BY product_id
    ) SELECT * FROM results limit 10;
    `,
  ratingData: `
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
    ) SELECT json_object_agg(recommend, COUNT) FROM temp_recommend where recommend = 'true';
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
  `,
};
