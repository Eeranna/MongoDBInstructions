var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('demo',['emp'])

var count = 0;
describe('Emp Data Set',function(){
	before(function(done){
		db.emp.find({City:'Pune'},function(err,res){
			count=res.length;
			done();
		});
	});
	it('count:',function(){
			expect(count).to.equal(7);
	});
	before(function(done){
		db.emp.find({City:'Pune'},function(err,res){
			data=res[0].firstName;
			done();
		});
	});
	it('Check Name',function(){
		expect(data).to.equal('Leslie');
	});
});

var db1 = mongojs('demo',['infotel'])

var count = 0;
describe('Infotel Data Set',function(){
	before(function(done){
		db1.infotel.find({},function(err,res){
			count=res.length;
			done();
		});
	});
	it('count:',function(){
			expect(count).to.equal(5409);
	});
});