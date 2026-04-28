const removeFromArray = function(arr,...itemsToRemove) {
    return arr.filter((item) => !itemsToRemove.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4, "catch", "frog"], 2, 2, 2, 3, 8, 9, "frog"));

// Do not edit below this line
module.exports = removeFromArray;
