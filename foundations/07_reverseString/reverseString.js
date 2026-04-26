const reverseString = function(string) {
    const arr = string.split('');
    let modifiedArr = arr.reverse();
    return modifiedArr.join('');
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
