function indexShift (current, shift){
    var sum = (current + shift);
    if ((sum <= 25) && (sum >= 0)){
        return sum;
    } else if (sum > 25){
        while(sum > 25){
            sum = sum - 26;
        }
        return sum;
    } else {
        while (sum < 0){
            sum = sum + 26;
        }
        return sum;
    }
}

const caesar = function(string, shift) {
    var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    upperAlpha = upperAlpha.split("");
    var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    lowerAplha = lowerAlpha.split("");
    var newArray = string.split("");

    for (i = 0; i < newArray.length; i++){
        if (upperAlpha.includes(newArray[i])){
            var idx = upperAlpha.indexOf(newArray[i]);
            var mt = indexShift(idx, shift);
            newArray[i] = upperAlpha[mt];
        }else if (lowerAlpha.includes(newArray[i])){
            var idx = lowerAlpha.indexOf(newArray[i]);
            var mt = indexShift(idx, shift);
            newArray[i] = lowerAlpha[mt];
        }
    }

    var newString = newArray.join("");
    return newString
}

module.exports = caesar