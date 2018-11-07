const express = require('express');
const cors = require('cors');
const Models = require('../database/models.js');

const app = express();

// app.use(cors());

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

app.listen(3002, () => console.log('listening on port 3002!'));
