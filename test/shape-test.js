const test = require("../lib/testing.js"); 
const sq = require("../src/square.js");

const testSquare = function() {
	test.assertEquality("****\n****\n****\n****\n", sq.square(4), 'should give square of given length');
}

testSquare();
