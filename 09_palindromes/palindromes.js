const palindromes = function (str) {
    const updatedStr = str.toLowerCase().replace(/[^A-Za-z]/g, ""); 
    //Removes uppercase letters and punctuation from string.
    
    const reverseStr = updatedStr.split('').reverse().join('')
    //Reverses the string

    return updatedStr === reverseStr ? true : false;
    //checks if the string inputted matches the reversed string
};


// Do not edit below this line
module.exports = palindromes;
