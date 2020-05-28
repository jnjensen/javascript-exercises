

const removeFromArray = function (array, num) {
    var newArray = array;
    var length = newArray.length;
    var count = arguments.length;

    for (a = 1; a < count; a++){
        for (i = 0; i < length; i++){
            var x = typeof newArray[i];
            var y = typeof arguments[a];
            if (newArray[i] == arguments[a] && x == y){
                newArray.splice(i, 1);
            }
        }
    }

    return newArray
}

module.exports = removeFromArray
