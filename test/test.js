
// TESTING THAT JEST WORKS:

const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// TESTING schema.sql AND models.js

const Models = require('../database/models.js');

test('Models.getRestaurants should exist', () => {
  expect(Models.getRestaurants).toBeDefined();
});

test('Models.getRestaurants should return truthy values', () => {
  Models.getRestaurants((results) => {
    expect(results).toBeTruthy();
    expect(results[0]).toBeTruthy();
  });
});

test('Models.getRestaurants should return an array of objects', () => {
  Models.getRestaurants((err, results) => {
    expect(Array.isArray(results)).toBeTruthy();
  });

  Models.getRestaurants((err, results) => {
    expect(Array.isArray(results[0])).toBe(false);
    expect(typeof results[0]).toBe('object');
    expect(typeof results[0] === 'string').toBe(false);
    expect(typeof results[0] === 'number').toBe(false);
    expect(typeof results[0] === 'function').toBe(false);
    expect(typeof results[0] === 'symbol').toBe(false);
  });
});

test('Models.insertRestaurant should exist', () => {
  expect(Models.insertRestaurant).toBeDefined();
});

const dummyData = require('../database/seed.js');

const newRestaurantObject0 = {
  id: '0',
  name: '0',
  address: '0',
  address_2: '0',
  city: '0',
  state: '0',
  zip: '0',
  longitude: '0',
  latitude: '0',
  neighborhood: '0',
  website: '0',
  description: '0',
  hours: '0',
  phone_number: '0',
  price_range: '0',
  review_average: '0',
  review_count: '0',
  tags: '0',
};

const newRestaurantObject1 = {
  id: '1',
  name: '1',
  address: '1',
  address_2: '1',
  city: '1',
  state: '1',
  zip: '1',
  longitude: '1',
  latitude: '1',
  neighborhood: '1',
  website: '1',
  description: '1',
  hours: '1',
  phone_number: '1',
  price_range: '1',
  review_average: '1',
  review_count: '1',
  tags: '1',
};

test('Models.insertRestaurant should increase the number of restaurants in the database', () => {
  Models.getAllRestaurants((err, results) => {
    const restaurantsBeforeInsert = results;
    Models.insertRestaurant(newRestaurantObject0, () => {
      Models.getAllRestaurants((newResults) => {
        const restaurantsAfterInsert = newResults;
        expect(restaurantsBeforeInsert.length).toBeLessThan(restaurantsAfterInsert.length);
      });
    });
  });
});

test('Models.getRestaurant should return a restaurant given an ID', () => {
  Models.insertRestaurant(newRestaurantObject1);
  Models.getRestaurant(1, (err, getOneResult) => {
    Models.getRestaurants((error, getAllResult) => expect(getOneResult).toEqual(getAllResult));
  });
});

test('Models.resetDatabase should delete all new records in the database, leaving only the dummy data', () => {
  Models.resetDatabase(() => {
    Models.getAllRestaurants((results) => {
      expect(results).toEqual(dummyData.data);
    });
  });
});
