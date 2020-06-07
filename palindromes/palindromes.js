function checkPunc (string){
    var punc = ", . / ? ! : ; \ @ # $ % ^ & * ( ) - ' \""
    punc = punc.split(" ");
    var newArray = string.split("");
    var finalArray = [];
    for (is = 0; is < newArray.length; is++){
        var notPunc = "yes";
        for (ip = 0; ip < punc.length; ip++){
            if (newArray[is] == punc[ip]){
                notPunc = "no";
            }
        }
        if (notPunc == "yes"){
            finalArray.push(newArray[is]);
        }
    }
    var newString = finalArray.join("");
    return newString;
}

function cleanString (string){
    var noPuncString = checkPunc(string);
    var newArray = noPuncString.split(" ");
    var newString = newArray.join("");
    return (newString.toLocaleLowerCase());
}

function reverseString (string){
    var array = string.split("");
    var backward = array.reverse();
    var backToString = backward.join("");
    return backToString
}

const palindromes = function(string) {
    var clean = cleanString(string);
    var reverse = reverseString(clean);
    if (clean == reverse){
        return true;
    }else{
        return false;
    }
}

module.exports = palindromes


checkPunc("testing, my string!");
