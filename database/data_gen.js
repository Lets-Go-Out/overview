const faker = require("faker");
const fs = require("fs");
const uuidv1 = require("uuid/v1");
faker.seed(105);
const dataSize = 10000000;
let date = Date.now();
let csv = fs.createWriteStream("./dummyDataCass.csv");
csv.write(
  "id#created_at#name#address_line_1#address_line_2#city#state#zip#longitude#latitude#neighborhood#website#description#hours#phone_number#price_range#review_average#review_count#dining_style#cuisine_type#private_dining#executive_chef#dress_code#catering#payment_options#parking_details#cross_street#promos#public_transit#private_part_fac#private_party_contact#tags\r\n"
);
const newRestaurant = i => {
  let fakeRestaurant = i + "#";
  fakeRestaurant += new Date(date - (30 * 24 * 60 * 60 * i) / dataSize) + "#";
  fakeRestaurant += faker.company.companyName(0) + "#";

  fakeRestaurant += faker.address.streetAddress() + "#";

  if (i % 3 === 0) {
    fakeRestaurant += faker.address.secondaryAddress() + "#";
  } else {
    fakeRestaurant += "#";
  }

  fakeRestaurant += faker.address.city() + "#";
  fakeRestaurant += faker.address.stateAbbr() + "#";
  fakeRestaurant += faker.address.zipCode() + "#";
  fakeRestaurant += faker.address.longitude() + "#";
  fakeRestaurant += faker.address.latitude() + "#";

  const fakeWords = [];

  const neighborhoodLength = faker.random.number(3);
  for (let j = 0; j <= neighborhoodLength; j += 1) {
    fakeWords.push(faker.name.lastName());
  }
  fakeRestaurant += fakeWords.join(" ") + "#";

  fakeRestaurant += faker.internet.url() + "#";

  const fakeParagraphs = [];
  const descriptionLength = faker.random.number(3) + 1;
  for (let j = 0; j < descriptionLength; j += 1) {
    fakeParagraphs.push(faker.lorem.paragraph());
  }
  fakeRestaurant += fakeParagraphs.join("") + "#";

  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += faker.phone.phoneNumber() + "#";

  // Quintile price range represented in $s.
  // (e.g. $ === 1st quintile# $$$$ === fourth quintile)
  let priceRange = "$";
  const numberOf$s = faker.random.number(4);
  for (let j = 0; j < numberOf$s; j += 1) {
    priceRange += "$";
  }
  fakeRestaurant += priceRange + "#";
  let total = 0;
  total = Math.floor(total);

  fakeRestaurant += Math.random() * 100 + "#";
  fakeRestaurant += Math.floor(Math.random() * 100) + "#";
  // --------------------------------------------------------

  // fakeRestaurant.tags = [];

  fakeRestaurant += faker.company.catchPhraseAdjective() + "#";

  const fakeCuisines = [];
  const numberOfCuisines = faker.random.number(6) + 1;
  for (let j = 0; j < numberOfCuisines; j += 1) {
    fakeCuisines.push(faker.company.bsAdjective());
  }
  fakeRestaurant += fakeCuisines.join(",") + "#";

  // if (i % 2 === 1) {
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += `${faker.name.firstName()} ${faker.name.lastName()}#`;
  fakeRestaurant += faker.random.word() + "#";
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += `${faker.random.word()} & ${faker.name.lastName()}#`;
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += faker.lorem.sentence() + "#";
  fakeRestaurant += faker.lorem.sentence() + "#";
  // } else {
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // fakeRestaurant += "NULL#";
  // }
  const numberOfTags = Math.random() * 10;
  for (let j = 0; j < numberOfTags; j += 1) {
    fakeRestaurant += faker.company.catchPhraseDescriptor() + ",";
  }
  fakeRestaurant += "\r\n";

  // fakeRestaurants += fakeRestaurant;
  if (i % 10000 === 0) {
    console.log(i);
  }
  if (i % 100000 === 0) {
    console.clear();
  }
  if (i === dataSize) {
    csv.write(fakeRestaurant);
    csv.end();
  } else if (!csv.write(fakeRestaurant)) {
    csv.once("drain", () => newRestaurant(i + 1));
  } else {
    process.nextTick(() => newRestaurant(i + 1));
  }
};
newRestaurant(0);
