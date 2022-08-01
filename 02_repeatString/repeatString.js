const repeatString = function(string, num) {
  let str = string
  let array = []
  for(let i = 1; i <= num; i++){
    array.push(str)
  }
  let arr = array.join('')
  return arr
};

// Do not edit below this line
module.exports = repeatString;
