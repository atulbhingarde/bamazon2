
DROP DATABASE IF EXISTS bamazon; -- drop the db if it exists
-- Create a database called bamazon --
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  -- Creates a numeric column called "item_id" which will automatically increment its default value as we create new rows. --
  id INTEGER auto_increment primary key, 
  item_id integer , -- INTEGER AUTO_INCREMENT, -- primary key, -- item id unique and 
  product_name VARCHAR(20),
  department_name varchar(20),
  stock_quantity INTEGER,
  price decimal(10,2),
  createdAt datetime default now(),
  updatedAt datetime default now()
  );
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (11,'Chisel','HandTool',1.50,22);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (12,'Hammer','HandTool',2.00,14);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (13,'ScrewDriver','HandTool',2.15,6);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (14,'Putty','Paint',5.22,10);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (15,'Brush','Paint',4.00,14);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (16,'PaintRoller','Paint',9.75,15);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (17,'WoodenBar','Lumber',3.09,34);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (18,'PlyWoow','Lumber',3.80,9);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (19,'TwoByFour','Lumber',0.75,24);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (20,'TwoWaySwitch','Electric',0.25,28);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (21,'Switch','Electric',2.00,30);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (22,'InsulationTape','Electric',0.20,18);


