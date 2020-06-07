function add (num1, num2) {
	return (num1 + num2);
}

function subtract (num1, num2) {
	return (num1 - num2);
}

function sum (array) {
	if (array.length == 0){
		return 0;
	}else{
		var sum = 0;
		for (i = 0; i < array.length; i++){
			sum = (sum + array[i]);
		}
		return sum;
	}
}

function multiply (array) {
	if (array.length == 0){
		return 0;
	}else{
		var product = 1;
		for (i = 0; i < array.length; i++){
			product = (product * array[i]);
		}
		return product;
	}
}

function power(num, pow) {
	if (pow == 0){
		return 0;
	}else{
		var total = num;
		for (i = 1; i < pow; i++){
			total = (total * num);
		}
		return total;
	}
}

function factorial(num) {
	if (num == 0){
		return 1;
	} else{
		var total = 1;
		for (i = 1; i <= num; i++){
			total = (total * i);
		}
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}