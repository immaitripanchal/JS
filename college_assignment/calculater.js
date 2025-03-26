var number = 14;
var number2 = 8;
calculator(number, number2);
function calculator(number, number2) {
	console.log('addition : ', +number + number2);
	console.log('subtraction : ', +number - number2);
	console.log('multiplication  : ', +number * number2);
	console.log('modulo : ', +(number % number2));
	if (number == 0 || number2 == 0) console.log('Division : Error, Division by zero is not allowed');
	else console.log('Division :', number / number2);
}
