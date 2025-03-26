var number = [4, 0, -1, 3, 2, 0, -8, -95, 23, 5, -56, 0, 12];
var positive = 0;
var negative = 0;
var zero = 0;
for (var i = 0; i < number.length; i++) {
	if (number[i] > 0) positive++;
	else if (number[i] < 0) negative++;
	else zero++;
}
console.log('Number of positive numbers : ' + positive);
console.log('Number of negative numbers : ' + negative);
console.log('Number of zeroes : ' + zero);
