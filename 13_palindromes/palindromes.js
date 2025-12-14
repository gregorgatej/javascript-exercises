const palindromes = function (string) {
    const arr = string
                    .split("")
                    .map(char => char.toLowerCase());
    let j = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (!isAlphaNumeric(arr[i])) continue;

        while (!isAlphaNumeric(arr[j])) j--;

        console.log(arr[i]);
        console.log(arr[j]);
        console.log("");

        if (!(arr[i] === arr[j])) {
            return false;
        }

        j--;
    }

    return true;
};

function isAlphaNumeric(char) {
    return /[a-z0-9]/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
