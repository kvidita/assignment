const math = require("../src/math.js");

const selectEvenNumbers = function(numbers) {
	const evenNumbers = [];
	for(const number of numbers) {
		if (math.isEven(number)) {
			evenNumbers.push(number);
		}
	}
	return evenNumbers;
}

const selectOddNumbers = function(numbers) {
	const evenNumbers = [];
	for(const number of numbers) {
		if (math.isOdd(number)) {
			evenNumbers.push(number);
		}
	}
	return evenNumbers;
}

exports.selectEvenNumbers = selectEvenNumbers;
exports.selectOddNumbers = selectOddNumbers;
