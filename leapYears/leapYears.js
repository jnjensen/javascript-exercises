const leapYears = function(year) {
    var four = year % 4;
    var hundred = year % 100;
    var fourHundred = year % 400;

    if (four == 0 && hundred != 0){
        return true;
    } else if (four == 0 && hundred == 0){
        if (fourHundred == 0){
            return true;
        }
    } 

    return false;
}

module.exports = leapYears
