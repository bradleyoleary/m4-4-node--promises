// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const testGreeting = () => {
  //Inserting API URL
  return request('https://journeyedu.herokuapp.com/hello') // 1
    .then((response) => {
      //console.log(JSON.parse(response))
      //JSON.parse to return the parsed data
      return JSON.parse(response); // 2
    })
    .then((parsedResponse) => {
      //console.log(parsedResponse)
      return parsedResponse.data.text; // 3
    })
    .catch((err) => console.log('Error: ', err));
};

testGreeting().then((result) => console.log(result));
