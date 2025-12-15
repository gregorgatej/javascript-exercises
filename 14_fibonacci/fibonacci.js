const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (typeof num !== "number") {
        num = parseInt(num);
    };
    const seq = [0, 1, 1];
    for (let i = 2; i <= num; i++) {
        const currEl = seq[seq.length - 2] + seq[seq.length - 1];
        seq.push(currEl);
    }
    return seq[num];
};

// Do not edit below this line
module.exports = fibonacci;
