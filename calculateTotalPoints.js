/*var distance = 227.5;
var hillSize = 225;
var kPoint = 200;
var styleNotes = [18, 18.5, 17.5, 18.5, 18.5];
var windFactor = -8.4;
gateFactor = 8.7;*/

const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
//  console.log ("Distance points for final calculation: "+ distancePoints);
  const stylePoints = calculateStylePoints(styleNotes);

  return distancePoints + stylePoints + windFactor + gateFactor;
}

//console.log ("Total score: " + calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor));

module.exports = calculateTotalPoints;