const sumAll = function(num1, num2) {
    let rangedArray = [];

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else {
        for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        rangedArray.push(i);
    }

    console.log(rangedArray);
    return rangedArray.reduce((accumulator, current) => accumulator + current);
    }
};

console.log(sumAll(17.5, -3));

// Do not edit below this line
module.exports = sumAll;
