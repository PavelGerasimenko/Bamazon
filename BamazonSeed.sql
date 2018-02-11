CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,

  product_name VARCHAR(100),

  department_name VARCHAR(100),

  price INTEGER(10),

  stock_quantity INTEGER(10),

  PRIMARY KEY (item_id)
  );

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('iPhone 8', 'Electronics', 990, 1234);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('HDD Disc', 'Electronics', 70, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Macbook Pro','Electronics', 1222, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Mouse', 'Electronics', 20, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Javascript for dummies', 'Books', 19, 133);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('How to Coding', 'Books', 9, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Apple T-Shirt', 'Cloth', 35, 88);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Soccerball', 'Sport', 9, 874);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Jacket', 'Cloth', 23, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Unicorn', 'Other', 1234567, 8765432);

SELECT * FROM products;
