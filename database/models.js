const mysql = require('mysql');
const dummyData = require('./dummyData.json');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'Why you checkin\' out my password tho?',
  database: 'drop_table',
});

module.exports.connection = dbConnection;

// module.exports.getAllRestaurants = (callback) => {
//   dbConnection.query('SELECT * FROM restaurants',
//     (err, results, fields) => {
//       if (err) {
//         callback(err, null, null);
//       } else {
//         callback(null, results, fields);z
//       }
//     });
// };

module.exports.getRestaurantById = (id, callback) => {
  // query database for restaurant with a given ID,
  dbConnection.query('SELECT * FROM restaurants WHERE id=?', [id], (err, results, fields) => {
    //    invoke error-first callback stuff
    if (err) {
      // console.error(err);
      callback(err, null, null);
    } else {
      console.log('getRestaurantById succeeded!');
      callback(null, results, fields);
    }
  });
};

// module.exports.insertRestaurant = (newRestaurant, callback) => {
//   // try to increase the size of the query string by concatonating comma-separated (?,?,?) s.
//   const queryArgs = Object.values(newRestaurant).slice(1);
//   dbConnection.query(`INSERT INTO restaurants VALUES (null${',?'.repeat(Object.keys(newRestaurant).length)})`, queryArgs, (err, results, fields) => {
//     if (err) {
//       callback(err, null, null);
//     } else {
//       callback(null, results, fields);
//     }
//   });
// };

module.exports.insertManyRestaurants = (restaurantsArray, callback) => {
  let query = `INSERT INTO restaurants (${Object.keys(restaurantsArray[0])}) VALUES `;

  query += '(NULL';
  for (let i = 1; i < Object.keys(restaurantsArray[0]).length; i += 1) {
    query += `,"${restaurantsArray[0][Object.keys(restaurantsArray[0])[i]]}"`;
  }
  query += ')';

  for (let i = 1; i < restaurantsArray.length; i += 1) {
    query += ', (NULL';
    for (let j = 1; j < Object.keys(restaurantsArray[i]).length; j += 1) {
      query += `, "${restaurantsArray[i][Object.keys(restaurantsArray[i])[j]]}"`;
    }
    query += ')';
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

// module.exports.deleteDatabase = (callback) => {
//   const query = 'SOURCE C:\\Users\\Owner\\hrsf105-overview-module\\database\\schema.sql';
//   dbConnection.query(query,
//     (err, results, fields) => {
//       console.log('Are we in the callback function of resetDatabase?');
//       if (err) {
//         callback(err, null, null);
//       } else {
//         console.log('DATABASE DELETED!!');
//         callback(null, results, fields);
//       }
//     });
// };

// module.exports.resetDatabase = (callback) => {
//   // This is set to my own file path... this should probably be refactored to use
//   // the path node module.
//   // console.log('Are we in resetDatabase?');
//   module.exports.deleteDatabase(
//     () => {
//       module.exports.insertManyRestaurants(dummyData, (insertError, insertResults) => {
//         if (insertError) {
//           console.log(insertError, null, null);
//           callback(insertError, null, null);
//         } else {
//           callback(null, insertResults);
//         }
//       });
//     },
//   );
// };
