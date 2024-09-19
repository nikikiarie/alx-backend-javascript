const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("test if", function() {
	    expect(calculateNumber("SUM", 3.2, 5.5)).to.equal(9);
	});
	it("test if", function() {
	    expect(calculateNumber("SUM", 2.1, 1.8)).to.equal(4);
	});
    });
    describe("SUBTRACT", function() {
	it("test if", function() {
	    expect(calculateNumber("SUBTRACT", 6.7, 3.4)).to.equal(3);
	});
	it("test if", function() {
	    expect(calculateNumber("SUBTRACT", 8.9, 4.2)).to.equal(5);
	});
	it("test if", function() {
	    expect(calculateNumber("SUBTRACT", -7.8, -2.3)).to.equal(-5);
	});
    });
    describe("DIVIDE", function() {
	it("test if", function() {
	    expect(calculateNumber("DIVIDE", 10.4, 2.5)).to.equal(4);
	});
	it("test if", function() {
	    expect(calculateNumber("DIVIDE", 5.6, 2.2)).to.equal(3);
	});
	it("test if", function() {
	    expect(calculateNumber("DIVIDE", 8, 0)).to.equal("Error");
	});
    });
});
