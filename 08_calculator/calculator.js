const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(num) {
	return num.reduce((a, b)=> a + b, 0)
};

const multiply = function(num) {
  return num.reduce((a, b)=> a * b)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  //base case
  if(num === 0 || num === 1){
    return 1
  // recursive case
  }else {
    return num * factorial(num-1)
  }
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
