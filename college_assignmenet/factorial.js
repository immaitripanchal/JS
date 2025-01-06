var number = 10;
if (number == 0) {
	console.log('Invalid number enter valid number');
} else {
	var fact = 1;
	for (var i = 1; i <= number; i++) {
		fact *= i;
	}
	console.log('Factorial of ' + number + ' is ' + fact);
}
