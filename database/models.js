const mysql = require('mysql');
const dummyData = require('./dummyData.json');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'Why you lookin\' at my password tho?',
});

module.exports.connection = dbConnection;

module.exports.getAllRestaurants = (callback) => {
  module.exports.connection.query('SELECT * FROM restaurants',
    (err, results, fields) => {
      if (err) {
        callback(err, null, null);
      } else {
        callback(null, results, fields);
      }
    });
};

module.exports.insertRestaurant = (newRestaurant, callback) => {
  // try to increase the size of the query string by concatonating comma-separated (?,?,?) s.
  const queryArgs = Object.values(newRestaurant).slice(1);
  module.exports.connection.query('INSERT INTO restaurants VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', queryArgs, (err, results, fields) => {
    if (err) {
      callback(err, null, null);
    } else {
      callback(null, results, fields);
    }
  });
};

module.exports.insertManyRestaurants = (restaurantsArray, callback) => {
  let query = `INSERT INTO restaurants VALUES (
    ${restaurantsArray[0].id},
    ${restaurantsArray[0].name},
    ${restaurantsArray[0].address_line_1},
    ${restaurantsArray[0].address_line_2},
    ${restaurantsArray[0].city},
    ${restaurantsArray[0].state},
    ${restaurantsArray[0].zip},
    ${restaurantsArray[0].longitude},
    ${restaurantsArray[0].latitude},
    ${restaurantsArray[0].neighborhood},
    ${restaurantsArray[0].website},
    ${restaurantsArray[0].description},
    ${restaurantsArray[0].hours},
    ${restaurantsArray[0].phone_number},
    ${restaurantsArray[0].price_range},
    ${restaurantsArray[0].review_average},
    ${restaurantsArray[0].review_count},
    ${restaurantsArray[0].tags}
  )`;

  for (let i = 1; i < restaurantsArray.length; i += 1) {
    query += `, (
      ${restaurantsArray[i].id},
      ${restaurantsArray[i].name},
      ${restaurantsArray[i].address_line_1},
      ${restaurantsArray[i].address_line_2},
      ${restaurantsArray[i].city},
      ${restaurantsArray[i].state},
      ${restaurantsArray[i].zip},
      ${restaurantsArray[i].longitude},
      ${restaurantsArray[i].latitude},
      ${restaurantsArray[i].neighborhood},
      ${restaurantsArray[i].website},
      ${restaurantsArray[i].description},
      ${restaurantsArray[i].hours},
      ${restaurantsArray[i].phone_number},
      ${restaurantsArray[i].price_range},
      ${restaurantsArray[i].review_average},
      ${restaurantsArray[i].review_count},
      ${restaurantsArray[i].tags}
    )`;
  }

  module.exports.connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log(results);
      callback(null, results);
    }
  });
};

module.exports.resetDatabase = (callback) => {
  // This is set to my own file path... this should probably be refactored to use
  // the path node module.
  module.exports.connection.query('\\. C:\\Users\\Owner\\hrsf105-overview-module\\database\\schema.sql',
    (err) => {
      if (err) {
        callback(err, null, null);
      } else {
        module.exports.insertManyRestaurants(dummyData, (error, results) => {
          if (error) {
            console.error(error, null, null);
            callback(error, null, null);
          } else {
            callback(null, results);
          }
        });
      }
    });
};
