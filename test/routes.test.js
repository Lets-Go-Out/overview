// tests for server/index.js

const $ = require('jquery');
const dummyData = require('../database/dummyData.json');
const Models = require('../database/models.js');

test('GET requests to api/restaurants/overview should return a list of all restaurants', () => {
  $.get('api/restaurants/overview', (data) => {
    expect(data).toEqual(dummyData);
  });
});
