var expect = require('chai').expect;
var test = require('../calc')
describe('Calculator',function(){
	it('Add should correctly add two numbers',function(){
		result = calc.add(4,3)
			expect(result).to.equal(7)
	})
	it('Subtract should correctly subtract two numbers',function(){
		result = calc.subtract(4,3)
			expect(result).to.equal(1)
	})
	it('Multiply should correctly multiply two numbers',function(){
		const result = calc.multiply(4,3)
			expect(result).to.equal(12)
	})
	it('Division should correctly division two numbers',function(){
		const result = calc.division(12,2)
			expect(result).to.equal(6)
	})
})