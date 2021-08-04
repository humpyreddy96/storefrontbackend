CREATE TABLE IF NOT EXISTS orders (
   id SERIAL PRIMARY KEY,
   product_id integer REFERENCES products(id),
   quantity integer,
   user_id bigint REFERENCES users(id),
   status text
);

