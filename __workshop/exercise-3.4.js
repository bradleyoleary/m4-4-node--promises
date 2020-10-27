// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require('./exercise-3.1');
const { getPositionFromAddress } = require('./exercise-3.2');
const { get } = require ('request-promise')

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  const position1 = getIssPosition();
  //console.log(position1)
  const position2 = getPositionFromAddress(address);
  //console.log(position2)
  return Promise.all([position1, position2])
  .then(([position1, position2]) => {
    //console.log(position1, position2)
    return getDistance(position1, position2)
  }
  )
};


getDistanceFromIss('Ottawa').then((result) => console.log(result))