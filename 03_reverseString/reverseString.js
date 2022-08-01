const reverseString = function(str) {
 const strArr = str.split('')
 let strReverse = strArr.reverse()
 let strJoin = strReverse.join('')
 return strJoin
};

// Do not edit below this line
module.exports = reverseString;
