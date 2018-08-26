var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('demo',['emp'])

app.get('/',function(req,res){
	res.send('Hi welcome to express');
});
app.get('/Emp',function(req,res){
	db.emp.find({},function(err,data){
		res.send(data)
	})
});
app.get('/Emp/:id',function(req,res){
	var reqid = parseInt(req.params.id);
	db.emp.find({id:reqid},function(err,data){
		res.send(data)
	})
});

app.listen(3000);