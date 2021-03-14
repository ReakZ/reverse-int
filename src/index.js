module.exports = function reverse(n) {
    let string = Math.abs(n).toString();
    let reverseNumber = string.split("").reverse().join("");
    return parseInt(reverseNumber, 10);
};
