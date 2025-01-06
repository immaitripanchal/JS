var percentage = 89;
if (percentage >= 90) {
	console.log('A+ grade');
} else if (percentage < 90 && percentage >= 75) {
	console.log('A grade');
} else if (percentage < 75 && percentage >= 65) {
	console.log('B grade');
} else if (percentage < 65 && percentage >= 55) {
	console.log('C grade');
} else if (percentage < 55 && percentage >= 45) {
	console.log('D grade');
} else {
	console.log('Fail');
}
