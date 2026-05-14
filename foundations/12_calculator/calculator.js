const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, item) => acc + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  const arr = [];

  if (num === 0) {return 1}

	for (let i = num; i >= 1; i--) {
    arr.push(i)
  }

  return arr.reduce((acc, item) => acc * item);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
