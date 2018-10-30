const express = require('express');
const bodyParser = require('body-parser');
const Models = require('../database/models.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/restaurants', (req, res) => {
  Models.getAllRestaurants((error, results) => {
    if (error) {
      res.status(404);
      console.error(error);
      res.send('Something went wrong!');
    } else {
      res.send(results);
    }
  });
});

app.listen(3001, () => console.log('listening on port 3001!'));
