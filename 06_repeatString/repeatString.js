function repeatString(str, reps) {
    let repeatedString = "";
    if(reps < 0) {
        // throw new Error("ERROR");
        return "ERROR";
    } else {
        for (let i = 0; i < reps; i++) {
            repeatedString += str;
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
