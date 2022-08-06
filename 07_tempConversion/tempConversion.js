//	from Celsius	to Celsius
//Fahrenheit	[°F] = [°C] × 9⁄5 + 32	[°C] = ([°F] − 32) × 5⁄9

const ftoc = function(fTemp) {
  let celsiusTemp = (fTemp - 32) * (5 / 9 )

  return (celsiusTemp == 0) ? 0 : parseFloat(celsiusTemp.toFixed(1))
};

const ctof = function(cTemp) {
  let fahrenheitTemp = (cTemp * (9/5)) + 32
  return (fahrenheitTemp == 0) ? 0 : parseFloat(fahrenheitTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
