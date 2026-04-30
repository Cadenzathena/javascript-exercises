const convertToCelsius = function(fahNum) {
  let celsiusValue = (fahNum - 32) * (5 / 9);
  return (Math.round(celsiusValue * 10) / 10);
};

convertToCelsius(32);

const convertToFahrenheit = function(celNum) {
  let fahrenheitValue = (celNum * (9 / 5)) + 32;
  return (Math.round(fahrenheitValue * 10) / 10);
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
