DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

\c test

CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  slogan VARCHAR(150) NOT NULL,
  description VARCHAR(500) NOT NULL,
  category VARCHAR(50) NOT NULL,
  default_price INT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL, -- REFERENCES products(id),
  rating INT,
  created_at BIGINT NOT NULL,
  summary VARCHAR(150) NOT NULL,
  body VARCHAR(500) NOT NULL,
  recommend VARCHAR(5),
  reported VARCHAR(5) DEFAULT false,
  reviewer_name VARCHAR(50),
  reviewer_email VARCHAR(50),
  response VARCHAR(200),
  helpfulness INT DEFAULT 0
);

CREATE TABLE photos (
  id SERIAL NOT NULL PRIMARY KEY,
  review_id INT NOT NULL REFERENCES reviews(id),
  url VARCHAR(200)
);

CREATE TABLE characteristics (
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products(id),
  name VARCHAR(10) NOT NULL
);

CREATE TABLE characteristics_reviews (
  id SERIAL NOT NULL PRIMARY KEY,
  review_id INT NOT NULL REFERENCES reviews(id),
  characteristic_id INT NOT NULL REFERENCES characteristics(id),
  value INT
);

COPY products(id, name, slogan, description, category, default_price)
FROM '/Users/timjordan/HackReactor/SDC/reviews/data/product.csv'
DELIMITER ','
CSV HEADER;

COPY reviews(id, product_id, rating, created_at, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
FROM '/Users/timjordan/HackReactor/SDC/reviews/data/reviews.csv'
DELIMITER ','
CSV HEADER;

COPY photos(id, review_id, url)
FROM '/Users/timjordan/HackReactor/SDC/reviews/data/reviews_photos.csv'
DELIMITER ','
CSV HEADER;

COPY characteristics(id, product_id, name)
FROM '/Users/timjordan/HackReactor/SDC/reviews/data/characteristics.csv'
DELIMITER ','
CSV HEADER;

COPY characteristics_reviews(id, characteristic_id, review_id, value)
FROM '/Users/timjordan/HackReactor/SDC/reviews/data/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX idx_products_id ON products(id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_photos_review_id ON photos(review_id);
CREATE INDEX idx_characteristics_product_id ON characteristics(product_id);
CREATE INDEX idx_characteristics_reviews_review_id ON characteristics_reviews(review_id);
CREATE INDEX idx_characteristics_reviews_characteristic_id ON characteristics_reviews(characteristic_id);
