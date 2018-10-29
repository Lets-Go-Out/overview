const faker = require('faker');
const fs = require('fs');
const sharedDummyData = require('./sharedDummyData.js');

faker.seed(105);
const fakeRestaurants = sharedDummyData;
let fakeRestaurant;

for (let i = 1; i < fakeRestaurants.length; i += 1) {
  fakeRestaurant = fakeRestaurants[i];
  fakeRestaurant.address_line_1 = faker.address.streetAddress();

  if (i % 3 === 0) {
    fakeRestaurant.address_line_2 = faker.address.secondaryAddress();
  } else {
    fakeRestaurant.address_line_2 = null;
  }

  fakeRestaurant.city = faker.address.city();
  fakeRestaurant.state = faker.address.stateAbbr();
  fakeRestaurant.zip = faker.address.zipCode();
  fakeRestaurant.longitude = faker.address.longitude();
  fakeRestaurant.latitude = faker.address.latitude();

  const fakeWords = [];

  const neighborhoodLength = faker.random.number(3);
  for (let j = 0; j <= neighborhoodLength; j += 1) {
    fakeWords.push(faker.random.word());
  }
  fakeRestaurant.neighborhood = fakeWords.join(' ');

  fakeRestaurant.website = faker.internet.url();
  fakeRestaurant.description = faker.lorem.paragraph();
  fakeRestaurant.hours = faker.address.secondaryAddress();
  fakeRestaurant.phone_number = faker.phone.phoneNumber();

  // Quintile price range represented in $s.
  // (e.g. $ === 1st quintile, $$$$ === fourth quintile)
  let priceRange = '';
  const numberOf$s = faker.random.number(5);
  for (let j = 0; j < numberOf$s; j += 1) {
    priceRange += '$';
  }
  fakeRestaurant.price_range = priceRange;

  // REVIEW DATA -----------------------------------------
  // consider adding to shared dummy data.
  let total;
  const numberOfReviews = faker.random.number(2000);

  for (let j = 0; j < numberOfReviews; j += 1) {
    total += faker.random.number(5);
  }

  fakeRestaurant.review_average = total / numberOfReviews;
  fakeRestaurant.review_count = numberOfReviews;
  // --------------------------------------------------------

  fakeRestaurant.tags = [];

  const numberOfTags = faker.random.number(50);
  for (let j = 0; j < numberOfTags; j += 1) {
    fakeRestaurant.tags.push(faker.hacker.noun());
  }
}

const restaurantsJSON = JSON.stringify(fakeRestaurants);

fs.writeFileSync('./database/dummyData.json', restaurantsJSON);
