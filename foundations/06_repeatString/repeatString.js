const repeatString = function(stringArg, numArg) {
    if (numArg < 0) {
        return "ERROR";
    }
    else if (numArg >= 0) {
        let arr = [];

        for (let i = 1; i <= numArg; i++) {
            arr.push(stringArg);
        }

        return arr.join("");
    } 
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
