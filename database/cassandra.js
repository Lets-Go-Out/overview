// "create table restaurants (id uuid, created_at text, name text, address_line_1 text, address_line_2 text, city text, state text, zip text, longitude decimal, latitude decimal, neighborhood text, website text, description text, hours text, phone_number text, price_range text, review_average decimal, review_count int, dining_style text, cuisine_type text, private_dining text,executive_chef text, dress_code text, catering text, payment_options text, parking_details text, cross_street text, promos text, public_transit text, private_part_fac text, private_party_contact text, tags text, PRIMARY KEY(id))";
const cassandra = require("cassandra-driver");
const client = new cassandra.Client({
  contactPoints: ["localhost"],
  localDataCenter: "datacenter1",
  keyspace: "restaurants"
});

client
  .execute(
    "COPY restaurants(created_at, name, address_line_1, address_line_2, city, state, zip, longitude, latitude, neighborhood, website, description, hours, phone_number, price_range, review_average, review_count, dining_style, cuisine_type, private_dining,executive_chef, dress_code, catering, payment_options, parking_details, cross_street, promos, public_transit, private_part_fac, private_party_contact, tags) FROM '/Users/student/Desktop/overview/database/dummyData.csv' with (DELIMITER '#', HEADER true)"
  )
  .then(res => console.log(res))
  .catch(err => console.log(err));
//   COPY restaurants(created_at, name, address_line_1, address_line_2, city, state, zip, longitude, latitude, neighborhood, website, description, hours, phone_number, price_range, review_average, review_count, dining_style, cuisine_type, private_dining,executive_chef, dress_code, catering, payment_options, parking_details, cross_street, promos, public_transit, private_part_fac, private_party_contact, tags) FROM '/Users/student/Desktop/overview/database/dummyData.csv' WITH DELIMITER = '#' AND HEADER = true;
