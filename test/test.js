
// TESTING THAT JEST WORKS:

const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// TESTING schema.sql AND models.js

const Models = require('../database/models.js');
const dummyData = require('../database/dummyData.json');

test('Models.getAllRestaurants should exist', () => {
  expect(Models.getAllRestaurants).toBeDefined();
});

test('Models.resetDatabase should delete all new records in the database, leaving only the dummy data', () => {
  Models.resetDatabase(() => {
    Models.getAllRestaurants((results) => {
      expect(results).toEqual(dummyData);
    });
  });
});


test('Models.getAllRestaurants should return truthy values', () => {
  Models.resetDatabase(() => {
    Models.getAllRestaurants((results) => {
      expect(results).toBeTruthy();
      expect(results[0]).toBeTruthy();
    });
  });
});

test('Models.getAllRestaurants should return an array of objects', () => {
  Models.resetDatabase(() => {
    Models.getAllRestaurants((err, results) => {
      expect(Array.isArray(results)).toBeTruthy();
      expect(Array.isArray(results[0])).toBe(false);
      expect(typeof results[0]).toBe('object');
      expect(typeof results[0] === 'string').toBe(false);
      expect(typeof results[0] === 'number').toBe(false);
      expect(typeof results[0] === 'function').toBe(false);
      expect(typeof results[0] === 'symbol').toBe(false);
    });
  });
});

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

test('Models.getRestaurantById should exist', () => {
  expect(Models.getRestaurantById).toBeDefined();
});

test('Models.getRestaurantById should return a truthy value, and not throw an error', () => {
  Models.resetDatabase(() => {
    Models.getRestaurantById(1, (err, results) => {
      expect(results).toBeTruthy();
      expect(err).toBeFalsy();
    });
  });
});

test('Models.getRestaurantsById should return a specific value without throwing an error', () => {
  Models.resetDatabase(() => {
    Models.insertRestaurant(newRestaurantObject0, () => {
      Models.getRestaurantById(0, (err, results) => {
        expect(results).toEqual(newRestaurantObject0);
        expect(err).toBeFalsy();
      });
    });
  });
});

test('Models.insertRestaurant should exist', () => {
  expect(Models.insertRestaurant).toBeDefined();
});

test('Models.insertRestaurant should increase the number of restaurants in the database', () => {
  Models.resetDatabase(() => {
    Models.getAllRestaurants((err, results) => {
      const restaurantsBeforeInsert = results;
      Models.insertRestaurant(newRestaurantObject0, () => {
        Models.getAllRestaurants((error, newResults) => {
          const restaurantsAfterInsert = newResults;
          expect(error).toBeFalsy();
          expect(restaurantsBeforeInsert.length).toBeLessThan(restaurantsAfterInsert.length);
        });
      });
    });
  });
});

test('Models.insertRestaurant should add a speific restaurant to the database', () => {
  Models.resetDatabase(() => {
    Models.insertRestaurant(newRestaurantObject0, () => {
      Models.getRestaurantsById(0, (error, results) => {
        expect(error).toBeFalsy();
        expect(results).toEqual(newRestaurantObject0);
      });
    });
  });
});

test('Models.insertManyRestaurants should add multiple restaurants to the database', () => {
  Models.resetDatabase(() => {
    Models.insertManyRestaurants(newRestaurantsArray, (err, results) => {
      expect(err).toBeFalsy();
      expect(results).toBeTruthy();
      expect(results.length).toEqual(102);
    });
  });
});

test('Models.insertManyRestaurants should add multiple, specific restaurants to the database', () => {
  Models.resetDatabase(() => {
    Models.insertManyRestaurants(newRestaurantsArray, () => {
      Models.getAllRestaurants((err, results) => {
        expect(err).toBeFalsy();
        expect(results[100]).toEqual(newRestaurantObject0);
        expect(results[101]).toEqual(newRestaurantObject1);
        expect(1).toEqual(2);
      });
    });
  });
});
