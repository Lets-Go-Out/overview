require("dotenv").config();
const pg = require("pg");

const pool = new pg.Pool();

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// pool.connect((err, client, done) => {
//   if (err) throw err;
//   console.log(client);

// });
const seed = () => {
  pool
    .query("DROP TABLE restaurants")
    .catch(err => console.log(err))
    .then(() =>
      pool.query(
        "create table restaurants (id SERIAL PRIMARY KEY, created_at varchar(70), name varchar(70), address_line_1 varchar(70), address_line_2 varchar(70), city varchar(255), state varchar(20), zip varchar(15), longitude double precision, latitude double precision, neighborhood varchar(255), website varchar(255), description varchar(1500), hours varchar(500), phone_number varchar(50), price_range varchar(255), review_average double precision, review_count integer, dining_style varchar(255), cuisine_type varchar(255), private_dining varchar(255),executive_chef varchar(255), dress_code varchar(255), catering varchar(255), payment_options varchar(255), parking_details varchar(255), cross_street varchar(255), promos varchar(500), public_transit varchar(255), private_part_fac varchar(255), private_party_contact varchar(255), tags varchar(255))"
      )
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .then(() =>
      pool.query(
        "COPY restaurants(created_at, name, address_line_1, address_line_2, city, state, zip, longitude, latitude, neighborhood, website, description, hours, phone_number, price_range, review_average, review_count, dining_style, cuisine_type, private_dining,executive_chef, dress_code, catering, payment_options, parking_details, cross_street, promos, public_transit, private_part_fac, private_party_contact, tags) FROM '/Users/student/Desktop/overview/database/dummyData.csv' with (FORMAT CSV, DELIMITER '#', HEADER true)"
      )
    )
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
seed();
module.exports.seed = seed;
