psql postgres -U timjordan < reviews/database/schema.sql
EXPLAIN ANALYZE

SELECT * FROM reviews LIMIT 3;
SELECT * FROM products WHERE id = 4 LIMIT 3;
SELECT * FROM reviews WHERE product_id = 3 LIMIT 3;
SELECT * FROM photos WHERE review_id = 1 LIMIT 3;
SELECT * FROM characteristics WHERE product_id = 1 LIMIT 3;
SELECT * FROM characteristics_reviews WHERE characteristic_id = 1 LIMIT 3;
SELECT * FROM characteristics_reviews WHERE review_id = 1 LIMIT 3;

SELECT photos.id FROM photos INNER JOIN reviews ON reviews.id = photos.review_id limit 10;

SELECT reviews.product_id, reviews.rating, reviews.created_at, reviews.summary, reviews.body, reviews.recommend, reviews.reported, reviews.reviewer_name, reviews.reviewer_email, reviews.response, reviews.helpfulness FROM reviews INNER JOIN photos ON photos.review_id = reviews.id limit 10;

SELECT characteristics.name FROM characteristics INNER JOIN reviews ON reviews.product_id = characteristics.product_id limit 10;

SELECT rating, recommend FROM reviews WHERE product_id = 4 LIMIT 2;


-- INDEXING
cannot do must have separate names
CREATE INDEX idx_product_id ON products(id);
CREATE INDEX idx_product_id ON reviews(product_id);


SELECT reviews.product_id, reviews.rating, reviews.created_at, reviews.summary, reviews.body, reviews.recommend, reviews.reported, reviews.reviewer_name, reviews.reviewer_email, reviews.response, reviews.helpfulness FROM reviews INNER JOIN photos ON photos.review_id = reviews.id limit 2;

SELECT reviews.product_id AS "id", reviews.rating AS "rating" FROM reviews FOR JSON PATH LIMIT 10;



SELECT reviews.product_id, reviews.rating, reviews.created_at, reviews.summary, reviews.body, reviews.recommend, reviews.reported, reviews.reviewer_name, reviews.reviewer_email, reviews.response, reviews.helpfulness FROM reviews INNER JOIN photos ON photos.review_id = reviews.id limit 10;

SELECT json_agg(reviews) FROM (SELECT * FROM reviews where product_id = 1) as reviews limit 10;

SELECT json_agg(reviews) FROM reviews LIMIT 10;

SELECT reviews.product_id, reviews.rating, reviews.created_at, reviews.summary, reviews.body, reviews.recommend, reviews.reported, reviews.reviewer_name, reviews.reviewer_email, reviews.response, reviews.helpfulness FROM reviews INNER JOIN photos ON photos


select count(rating) from reviews where product_id = 2 and rating = 1;
