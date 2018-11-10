DROP DATABASE IF EXISTS drop_table;

CREATE DATABASE drop_table;
USE drop_table;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address_line_1 VARCHAR(255) NOT NULL,
  address_line_2 VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  state VARCHAR(200) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  longitude VARCHAR(255),
  latitude VARCHAR(255),
  neighborhood VARCHAR(255),
  website VARCHAR(200),
  description TEXT(5000) NOT NULL,
  hours VARCHAR(500) NOT NULL,
  phone_number VARCHAR(255),
  price_range VARCHAR(50),
  review_average INT,
  review_count INT,
  dining_style VARCHAR(100) NOT NULL,
  cuisine_types VARCHAR(500),
  private_dining TEXT(5000),
  executive_chef VARCHAR(100),
  dress_code VARCHAR(180),
  catering VARCHAR(1000),
  payment_options VARCHAR(1000),
  parking_details VARCHAR(1000),
  cross_street VARCHAR(100),
  promos VARCHAR(1000),
  public_transit VARCHAR(1000),
  private_party_fac VARCHAR(1000),
  private_party_contact VARCHAR(1000),
  tags VARCHAR(1000)
);
