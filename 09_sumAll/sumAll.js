const sumAll = function(startRange, endRange) {
    console.log(Number.isInteger(startRange));
    if (!Number.isInteger(startRange) || !Number.isInteger(endRange)) return "ERROR";
    if (startRange < 0 || endRange < 0) return "ERROR";
    if (startRange > endRange) {
        let temp = endRange;
        endRange = startRange;
        startRange = temp;
    }
    let arr = [];
    for(let i = startRange; i <= endRange; i++) {
        arr.push(i);
    }
    const sum = arr.reduce((acc, currentVal) => acc + currentVal);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
