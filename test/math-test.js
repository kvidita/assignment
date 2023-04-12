const addition = require("../src/math.js")
const subtraction = require("../src/math.js")
const multiplication = require("../src/math.js")
const test = require("../lib/testing.js") 

const testArithematicOperations = function() {
	test.assertEquality(2, addition.add(1, 1), "1 + 1 should be 2");
	test.assertEquality(3, subtraction.subtract(4, 1), "4 - 1 should be 3");
	test.assertEquality(6, multiplication.multiply(3, 2), "3 * 2 should be 6");
}

testArithematicOperations();

