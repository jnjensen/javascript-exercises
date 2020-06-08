const fibonacci = function(pos) {
    var idx = (Number(pos) - 1);
    var fib = [1, 1];

    if (pos <= 0){
        return "OOPS";
    } else if (pos == 1 || pos == 2){
        return 1;
    } else {
        for (i = 1; i < idx; i++){
            var sum = (fib[(i-1)] + fib[i]);
            fib.push(sum);
        }
    }
    return fib[idx];
}

module.exports = fibonacci
