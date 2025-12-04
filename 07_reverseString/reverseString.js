const reverseString = function(str) {
    letters = str.split("");
    reversedString = "";
    for (let i = letters.length-1; i >= 0; i-- ) {
        reversedString += letters[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
