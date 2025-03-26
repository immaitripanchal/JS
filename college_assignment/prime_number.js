var number = 3;
var flag = true;
if (number == 0 || number == 1) {
	console.log('not a prime number');
}
for (var i = 2; i < number; i++) {
	if (number % i == 0) {
		flag = false;
		break;
	}
}
if (flag == true) {
	console.log('prime number');
} else {
	console.log('not a prime number');
}
