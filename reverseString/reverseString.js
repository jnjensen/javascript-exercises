const reverseString = function(words) {
    var newString = "";
    var num = (words.length - 1)

    for (i = 0; i <= num; i++){
        newString += words[(num - i)];
    }
    return newString;
}

module.exports = reverseString
