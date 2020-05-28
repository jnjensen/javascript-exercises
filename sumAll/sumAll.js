const sumAll = function(num1, num2) {
    var total = 0;
    var x = typeof num1;
    var y = typeof num2;

    if (x == "number" && y == "number" && num1 >= 0 && num2 >= 0){
        if (num1 < num2){
            for (i = num1; i <= num2; i++){
                total += i;
            }
        } else {
            for (i = num2; i <= num1; i++){
                total += i;
            }
        }
        return total;
    } 
    return "ERROR";
}

module.exports = sumAll
