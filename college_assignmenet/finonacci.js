var number = 10;
var first = 0;
var second = 1;
var sum = 0;
if (number == 0 || number == 1) {
	console.log('please enter valid number :');
} else {
	console.log('Fibonacci Series :');
	console.log(first);
	console.log(second);
	for (var i = 2; i < number; i++) {
		sum = first + second;
		first = second;
		second = sum;
		console.log(sum);
	}
}
