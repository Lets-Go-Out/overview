const faker = require('faker');
const fs = require('fs');

faker.seed(105);

const fakeRestaurants = [];

for (let i = 1; i <= 100; i += 1) {
  const fakeRestaurant = { id: i };
  let fakeWords = [];
  const length = faker.random.number() % 3;

  for (let j = 0; j <= length; j += 1) {
    fakeWords.push(faker.random.word());
  }

  fakeRestaurant.name = fakeWords.join(' ');

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

  fakeWords = [];

  for (let j = 0; j <= length; j += 1) {
    fakeWords.push(faker.random.word());
  }

  fakeRestaurant.neighborhood = fakeWords.join(' ');

  fakeRestaurant.website = faker.internet.url();
  fakeRestaurant.description = faker.lorem.paragraph();
  fakeRestaurant.hours = faker.address.secondaryAddress();
  fakeRestaurant.phone_number = faker.phone.phoneNumber();

  let priceRange = '';
  const numberOf$s = faker.random.number(5);
  for (let j = 0; j < numberOf$s; j += 1) {
    priceRange += '$';
  }
  fakeRestaurant.price_range = priceRange;

  let total;
  const numberOfReviews = faker.random.number(2000);

  for (let j = 0; j < numberOfReviews; j += 1) {
    total += faker.random.number(5);
  }

  fakeRestaurant.review_average = total / numberOfReviews;
  fakeRestaurant.review_count = numberOfReviews;
  fakeRestaurant.tags = [];

  const numberOfTags = faker.random.number(50);
  for (let j = 0; j < numberOfTags; j += 1) {
    fakeRestaurant.tags.push(faker.hacker.noun());
  }

  fakeRestaurants.push(fakeRestaurant);
}

const restaurantsJSON = JSON.stringify(fakeRestaurants);

fs.writeFileSync('./database/dummyData.json', restaurantsJSON);
