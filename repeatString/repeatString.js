const repeatString = function(word, num) {
    var newWord = ""
    if (num >= 0){
        for (i = 0; i < num; i++){
            newWord += word;
        }
    } else {
        return "ERROR";
    }
    return newWord;
    }

module.exports = repeatString
