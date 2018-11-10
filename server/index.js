const express = require('express');
const cors = require('cors');
const port = 8081;
const app = express();

const Models = require('../database/models.js');
const dummyData = require('../database/dummyData.json');

app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/api/restaurants/overview/:id', (req, res) => {
  console.log('request params: ', req.params);
  Models.getRestaurantById(req.params.id, (err, results) => {
    if (err) {
      res.status(404);
      console.error('Server says: something went wrong with the get', err);
      res.send('Check the server console!');
    } else {
      console.log('Server success!: ');
      res.json(results[0]);
    }
  });
});

// app.get('/api/restaurants/seedDataBase', (req, res) => {
//   Models.insertManyRestaurants(dummyData, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.get('/api/restaurants/showDatabases', (req, res) => {
  Models.connection.query('SHOW DATABASES', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/restauarants/whatDatabase', (req, res) => {
  Models.connection.query('SELECT DATABASE()', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

// app.get('api/restaurants/queryMe/:query', (req, res) => {
//   Models.connection.query(req.params.query, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.get('/api/restaurants/showTables', (req, res) => {
  Models.connection.query('SHOW TABLES', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/restaurants/describeRestaurants', (req, res) => {
  Models.connection.query('DESCRIBE restaurants', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

// app.get('/api/restaurants/createDatabase', (req, res) => {
//   Models.connection.query('CREATE TABLE restaurants (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,address_line_1 VARCHAR(255) NOT NULL,address_line_2 VARCHAR(255),city VARCHAR(255) NOT NULL,state VARCHAR(200) NOT NULL,zip VARCHAR(20) NOT NULL,longitude VARCHAR(255),latitude VARCHAR(255),neighborhood VARCHAR(255),website VARCHAR(200),description TEXT(5000) NOT NULL,hours VARCHAR(500) NOT NULL,phone_number VARCHAR(255),price_range VARCHAR(50),review_average INT,review_count INT,dining_style VARCHAR(100) NOT NULL,cuisine_types VARCHAR(500),private_dining TEXT(5000),executive_chef VARCHAR(100),dress_code VARCHAR(180),catering VARCHAR(1000),payment_options VARCHAR(1000),parking_details VARCHAR(1000),cross_street VARCHAR(100),promos VARCHAR(1000),public_transit VARCHAR(1000),private_party_fac VARCHAR(1000),private_party_contact VARCHAR(1000),tags VARCHAR(1000))', (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.listen(port, () => console.log(`listening on port ${port}!`));
