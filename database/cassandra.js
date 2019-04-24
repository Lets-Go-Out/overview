// "create table restaurants (id int, created_at text, name text, address_line_1 text, address_line_2 text, city text, state text, zip text, longitude decimal, latitude decimal, neighborhood text, website text, description text, hours text, phone_number text, price_range text, review_average decimal, review_count int, dining_style text, cuisine_type text, private_dining text,executive_chef text, dress_code text, catering text, payment_options text, parking_details text, cross_street text, promos text, public_transit text, private_part_fac text, private_party_contact text, tags text, PRIMARY KEY(id))";
// node1 => 172.31.20.159   /   54.183.175.54
// node2 => 172.31.30.180   /   54.193.93.116
// node3 => 172.31.27.238   /   54.215.210.50

const cassandra = require("cassandra-driver");
const client = new cassandra.Client({
  contactPoints: ["54.183.175.54", "54.193.93.116", "54.215.210.50"],
  keyspace: "restaurants",
  socketOptions: {
    connectTimeout: 5000
  },
  localDataCenter: "us-west"
});
client
  .connect()
  .then(data => console.log("successful connection"))
  .catch(err => console.log(err));

module.exports.getRestaurantById = (id, callback) => {
  // query database for restaurant with a given ID,
  client
    .execute(`SELECT * FROM restaurants WHERE id=${id}`)
    .then(docs => callback(null, docs))
    .catch(err => callback(err));
};
module.exports.insertManyRestaurants = (restaurantsArray, callback) => {
  let query = `INSERT INTO restaurants (${Object.keys(
    restaurantsArray[0]
  )}) VALUES `;

  query += "(NULL";
  for (let i = 1; i < Object.keys(restaurantsArray[0]).length; i += 1) {
    query += `,"${restaurantsArray[0][Object.keys(restaurantsArray[0])[i]]}"`;
  }
  query += ")";

  for (let i = 1; i < restaurantsArray.length; i += 1) {
    query += ", (NULL";
    for (let j = 1; j < Object.keys(restaurantsArray[i]).length; j += 1) {
      query += `, "${
        restaurantsArray[i][Object.keys(restaurantsArray[i])[j]]
      }"`;
    }
    query += ")";
  }
  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log(results);
      callback(null, results);
    }
  });
};
// COPY restaurants.restaurants(id, created_at, name, address_line_1, address_line_2, city, state, zip, longitude,
//   latitude, neighborhood, website, description, hours, phone_number, price_range, review_average, review_count,
//   dining_style, cuisine_type, private_dining,executive_chef, dress_code, catering, payment_options, parking_details,
//   cross_street, promos, public_transit, private_part_fac, private_party_contact, tags)
//   FROM '/home/ec2-user/dummyDataCass.csv' WITH DELIMITER = '#' AND HEADER = true
//   AND MINBATCHSIZE = 10 AND MAXBATCHSIZE = 15;
