const mysql = require('mysql');
const fs = require('fs');

module.exports.connection = mysql.createConnection({
  user: 'root',
  password: 'Why you lookin\' at my password tho?',
});

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

module.exports.resetDatabase = (callback) => {
  module.exports.connection.query('\\. C:\\Users\\Owner\\hrsf105-overview-module\\database\\schema.sql',
    (err) => {
      if (err) {
        callback(err, null, null);
      } else {
        fs.readFile('./dummyData.json', (error, readResults) => {
          if (error) {
            callback(error, null, null);
          } else {
            const freshDB = JSON.parse(readResults);
            for (let i = 0; i < freshDB.length; i += 1) {
              module.exports.insertRestaurant(freshDB[i]);
            }
          }
        });
      }
    });
};
