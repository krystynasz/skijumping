/*var distance = 200;
var hillSize = 185;
var kPoint = 170;*/

const calculateDistancePoints = (distance, hillSize, kPoint) => {

    let hillSizePoints;

    if (hillSize >= 185) {
        hillSizePoints = 120;
    }
    else {
        hillSizePoints = 60;
    };

    //  console.log("Hillsize points: " + hillSizePoints);
    let distanceForExtraPoints = distance - kPoint;
    //console.log("Distance for extra points: " + distanceForExtraPoints);
    let extraPoints;

    if (hillSize >= 185) {
        extraPoints = distanceForExtraPoints * 1.2
    }
    else if (hillSize >= 110) {
        extraPoints = distanceForExtraPoints * 1.8
    }
    else {
        extraPoints = distanceForExtraPoints * 2
    };
   // console.log("Extra points: " + extraPoints);
    let distancePoints = extraPoints + hillSizePoints;
   // console.log("Distance points: " + distancePoints);
    return distancePoints;

};

//console.log(calculateDistancePoints (distance, hillSize, kPoint));

module.exports = calculateDistancePoints;
