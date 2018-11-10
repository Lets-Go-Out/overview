// TESTING schema.sql AND models.js

const Models = require('../database/models.js');
const dummyData = require('../database/dummyData.json');

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
  id: '01001',
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

const newRestaurantsArray = [newRestaurantObject0, newRestaurantObject1];

describe('Models.connection', () => {
  test('should exist', () => {
    expect(Models.connection).toBeDefined();
  });
});

describe('Models.getRestaurantById', () => {
  test('should exist', () => {
    expect(Models.getRestaurantById).toBeDefined();
  });

  test('should return a truthy value, and not throw an error', () => {
    Models.getRestaurantById(1, (err, results) => {
      expect(results).toBeTruthy();
      expect(err).toBeFalsy();
    });
  });
});

describe('Models.getRestaurantsById', () => {
  test('should return a specific value without throwing an error', () => {
    Models.getRestaurantById(1, (err, results) => {
      expect(results).toEqual(dummyData[0]);
      expect(err).toBeFalsy();
    });
  });
});

describe('Models.insertManyRestaurants', () => {
  test('should add multiple restaurants to the database', () => {
    Models.insertManyRestaurants(newRestaurantsArray, (err, results) => {
      expect(err).toBeFalsy();
      expect(results).toBeTruthy();
      expect(results.length).toEqual(102);
    });
  });
  test('should add multiple, specific restaurants to the database', () => {
    Models.insertManyRestaurants(newRestaurantsArray, () => {
      Models.getRestaurantById(1, (err, results) => {
        expect(err).toBeFalsy();
        expect(results[100]).toEqual([newRestaurantObject0]);
        expect(results[101]).toEqual([newRestaurantObject1]);
      });
    });
  });
  test('should throw an error if given bad input', () => {
    Models.insertManyRestaurants([{ foo: 'bar' }], (err, results) => {
      expect(err).toBeTruthy();
      expect(results).toBeFalsy();
    });
  });
});


// describe('Models.deleteDatabase', () => {
//   test('should throw an error when given an invalid callback argument', () => {
//     expect(Models.resetDatabase('Bad Callback'));
//   });
// });
