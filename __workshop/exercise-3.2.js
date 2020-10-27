// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const request = require('request');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY, 
    q: address,
  };

  return opencage.geocode(requestObj).then((data) => {
      return data.results[0].geometry;
    })
    .catch((error) => {
      console.log('error', error.message)
    })
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));
//Other test address
// getPositionFromAddress(
//   '1000 Innovation Drive, Ottawa, ON K2K 3E7'
// ).then((response) => console.log(response));

module.exports = { getPositionFromAddress }