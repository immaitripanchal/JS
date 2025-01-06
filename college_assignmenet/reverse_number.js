var number = 1234;
var rem = 0;
var reverse = 0;
while (number > 0) {
	rem = number % 10;
	number = parseInt(number / 10);
	reverse = reverse * 10 + rem;
}
console.log('reverse number is :' + reverse);
