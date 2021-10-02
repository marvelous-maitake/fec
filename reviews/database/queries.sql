connecting to the server
psql postgres -U timjordan < reviews/database/schema.sql

EXPLAIN ANALYZE SELECT * FROM reviews LIMIT 3;

EXPLAIN ANALYZE SELECT * FROM reviews WHERE product_id = 1 LIMIT 3;

EXPLAIN ANALYZE SELECT rating, recommend FROM reviews WHERE product_id = 4 LIMIT 2;

cannot do must have separate names
CREATE INDEX idx_product_id ON products(id);
CREATE INDEX idx_product_id ON reviews(product_id);


CREATE INDEX idx_products_id ON products(id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_photos_review_id ON photos(review_id);
CREATE INDEX idx_characteristics_product_id ON characteristics(product_id);
CREATE INDEX idx_characteristics_reviews_review_id ON characteristics_reviews(review_id);
CREATE INDEX idx_characteristics_reviews_characteristic_id ON characteristics_reviews(characteristic_id);


DROP INDEX idx_products_id;
DROP INDEX idx_reviews_product_id;
DROP INDEX idx_photos_review_id;
DROP INDEX idx_characteristics_product_id;
DROP INDEX idx_characteristics_reviews_review_id;
DROP INDEX idx_characteristics_reviews_characteristic_id;