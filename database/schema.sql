DROP DATABASE IF EXISTS drop_table;

CREATE DATABASE drop_table;
USE drop_table;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  address_2 VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  longitude VARCHAR(255),
  latitude VARCHAR(255),
  neighborhood VARCHAR(255),
  website VARCHAR(10000),
  description VARCHAR(1000) NOT NULL,
  hours VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255),
  price_range VARCHAR(5),
  review_average INT,
  review_count INT,
  tags VARCHAR(2000)
);
