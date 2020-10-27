// Exercise 3.1 - `getIssPosition`
// -----------------------------
const request = require('request-promise')
// require the 'request-promise' module.

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
  .then((response) => JSON.parse(response))
  .then((parsedResponse) => {
    //console.log(parsedResponse)
    return {
      lat: parsedResponse.iss_position.latitude,
      lng: parsedResponse.iss_position.longitude,
    }
  })
  .catch((err) => err.error)
};


module.exports = { getIssPosition }

getIssPosition().then((result) => console.log(result))