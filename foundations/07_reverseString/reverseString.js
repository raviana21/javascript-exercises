const reverseString = function(string) {
    let splitString = string.split('');
    let arr = splitString.reverse();
    return arr.join('')
};

// Do not edit below this line
module.exports = reverseString;
