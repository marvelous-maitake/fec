connecting to the server
-h localhost -p 5432 -u timjordan <database>

select * from reviews limit 3;

select * from reviews where product_id = 1 limit 3;

select rating, recommend from reviews where product_id = 4 limit 2;
