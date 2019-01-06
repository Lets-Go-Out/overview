const express = require('express');
const cors = require('cors');
const Models = require('../database/models.js');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/api/restaurants/overview/:id', (req, res) => {
  Models.getRestaurantById(req.params.id, (err, results) => {
    if (err) {
      res.status(404);
      res.send('Check the server console!');
    } else {
      res.json(results[0]);
    }
  });
});

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

app.listen(port, () => console.log(`listening on port ${port}!`)); // eslint disable-line
