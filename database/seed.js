const faker = require('faker');
const fs = require('fs');
const sharedDummyData = require('./sharedDummyData.js');
const Models = require('./models.js');

Models.connection.query('SOURCE C:\\Users\\Owner\\hrsf105-overview-module\\database\\schema.sql', () => {
  faker.seed(105);
  const fakeRestaurants = sharedDummyData;

  for (let i = 0; i < fakeRestaurants.length; i += 1) {
    const fakeRestaurant = fakeRestaurants[i];
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
      fakeWords.push(faker.name.lastName());
    }
    fakeRestaurant.neighborhood = fakeWords.join(' ');

    fakeRestaurant.website = faker.internet.url();

    const fakeParagraphs = [];
    const descriptionLength = faker.random.number(3) + 1;
    for (let j = 0; j < descriptionLength; j += 1) {
      fakeParagraphs.push(faker.lorem.paragraph());
    }
    fakeRestaurant.description = fakeParagraphs.join('\n');

    fakeRestaurant.hours = faker.lorem.paragraph();
    fakeRestaurant.phone_number = faker.phone.phoneNumber();

    // Quintile price range represented in $s.
    // (e.g. $ === 1st quintile, $$$$ === fourth quintile)
    let priceRange = '$';
    const numberOf$s = faker.random.number(4);
    for (let j = 0; j < numberOf$s; j += 1) {
      priceRange += '$';
    }
    fakeRestaurant.price_range = priceRange;

    // REVIEW DATA -----------------------------------------
    // consider adding to shared dummy data.
    let total = 0;
    const numberOfReviews = Math.floor(Math.random() * 10 * i * i) + 1;
    let currentReview;
    for (let j = 0; j < numberOfReviews; j += 1) {
      currentReview = faker.random.number(50) + 0.05 * i;
      if (currentReview < 10) {
        currentReview = 10;
      }
      if (currentReview > 50) {
        currentReview = 50;
      }
      total += currentReview;
    }

    total = Math.floor(total);

    fakeRestaurant.review_average = total / numberOfReviews;
    fakeRestaurant.review_count = numberOfReviews;
    // --------------------------------------------------------

    fakeRestaurant.tags = [];

    const numberOfTags = faker.random.number(50);
    for (let j = 0; j < numberOfTags; j += 1) {
      fakeRestaurant.tags.push(faker.company.catchPhraseDescriptor());
    }

    fakeRestaurant.dining_style = faker.company.catchPhraseAdjective();

    const fakeCuisines = [];
    const numberOfCuisines = faker.random.number(6) + 1;
    for (let j = 0; j < numberOfCuisines; j += 1) {
      fakeCuisines.push(faker.company.bsAdjective());
    }
    fakeRestaurants[i].cuisine_types = fakeCuisines.join(',');

    if (i % 2 === 1) {
      fakeRestaurant.private_dining = faker.lorem.paragraph();
      fakeRestaurant.executive_chef = `${faker.name.firstName()} ${faker.name.lastName()}`;
      fakeRestaurant.dress_code = faker.random.word();
      fakeRestaurant.catering = faker.lorem.sentence();
      fakeRestaurant.payment_options = faker.lorem.sentence();
      fakeRestaurant.parking_details = faker.lorem.sentence();
      fakeRestaurant.cross_street = `${faker.random.word()} & ${faker.name.lastName()}`;
      fakeRestaurant.promos = faker.lorem.paragraph();
      fakeRestaurant.public_transit = faker.lorem.sentence();
      fakeRestaurant.private_party_fac = faker.lorem.sentence();
      fakeRestaurant.private_party_contact = faker.lorem.sentence();
    } else {
      fakeRestaurant.private_dining = 'NULL';
      fakeRestaurant.executive_chef = 'NULL';
      fakeRestaurant.dress_code = 'NULL';
      fakeRestaurant.catering = 'NULL';
      fakeRestaurant.payment_options = 'NULL';
      fakeRestaurant.parking_details = 'NULL';
      fakeRestaurant.cross_street = 'NULL';
      fakeRestaurant.promos = 'NULL';
      fakeRestaurant.public_transit = 'NULL';
      fakeRestaurant.private_party_fac = 'NULL';
      fakeRestaurant.private_party_contact = 'NULL';
    }
    if (i % 43 === 0) {
      console.log(fakeRestaurant);
    }
  }

  const restaurantsJSON = JSON.stringify(fakeRestaurants);

  fs.writeFile('./database/dummyData.json', restaurantsJSON, () => {
    Models.insertManyRestaurants(fakeRestaurants, (err, results) => {
      if (err) {
        console.error(err);
      }
      console.log('Database seeding complete!');
      Models.connection.end();
    });
  });
});
