const ftoc = function(fahrenheitNum) {
 const celsiusConv = (fahrenheitNum - 32) * (5/9);

 const celsiusRound = Math.round(celsiusConv * 10) / 10;

 return celsiusRound
};

const ctof = function(celsiusNum) {
const fahrenheitConv = (celsiusNum * (9/5) + 32);

const fahrenheitRound = Math.round(fahrenheitConv * 10) / 10;

return fahrenheitRound
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
