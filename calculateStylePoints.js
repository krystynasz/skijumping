//var styleNotes = [19, 19, 19, 18, 19];

const calculateStylePoints = (styleNotes) => {
    let min = Math.min(...styleNotes);
    let max = Math.max(...styleNotes);
    //console.log(min);
    // console.log(max);

    let minIndex = styleNotes.indexOf(min);
    if (minIndex > -1) {
        styleNotes.splice(minIndex, 1);
    };
    //console.log("StyleNotes without the minimum value: " + styleNotes);

    let maxIndex = styleNotes.indexOf(max);
    if (maxIndex > -1) {
        styleNotes.splice(maxIndex, 1);
    };
    // console.log("StyleNotes without the maximum value: " + styleNotes);

    /*var filteredStyleNotes = styleNotes.filter(function (value, index, arr) {
        return value !== min && value !== max;
    });
    console.log("filteredStyleNotes: " + filteredStyleNotes);

    var maxStyleNotes = styleNotes.filter(function (value, index, arr) {
        return value == max;
    });
    maxStyleNotes.shift();
    console.log("maxStyleNotes : " + maxStyleNotes);

    var minStyleNotes = styleNotes.filter(function (value, index, arr) {
        return value == min;
    });
    minStyleNotes.shift();
    console.log("minStyleNotes: " + minStyleNotes);

    var threeNotes = [...filteredStyleNotes, ...maxStyleNotes, ...minStyleNotes];
    console.log('Three notes:' + threeNotes);*/

    let stylePoints = styleNotes.reduce((a, b) => a + b, 0);
    //console.log("Style points: " + stylePoints);
    return stylePoints;
};

//console.log(calculateStylePoints(styleNotes));

module.exports = calculateStylePoints;