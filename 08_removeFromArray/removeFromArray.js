const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        for (let i = arr.length-1; i >= 0; i--) {
            if (arr[i] === arg) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
