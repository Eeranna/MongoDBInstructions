var cors = require('cors')
var express= require('express')

var fs = require('fs')
var app = express()
app.use(cors())
var mongojs= require('mongojs')

var db=mongojs('company',['empList'])

app.get('/',function(req,res){
    db.empList.find({},function(err,data){
                       res.send(data)
                     })

})

app.get('/deleteRecord/:id',function(req,res){
	var id= parseInt(req.params.id);
    db.empList.remove({_id: id},1,function(err,data){
                     // res.send(data);
                     console.log("Deleted")
                     });
                     db.empList.find({},function(err,data){
                        res.send(data)
                      });
})

app.get('/addRecord/:data',function(req,res){
	var max= 2000,min=3000;
	var id= Math.floor(Math.random()*(max-min+1)+min);
	var data= JSON.parse(req.params.data);
	data._id= new mongojs.ObjectId(id);
    db.empList.insert(data);
    db.empList.find({},function(err,data){
        res.send(data)
      });
})

app.get('/updateRecord/:user',function(req,res){
    var user = JSON.parse(req.params.user);
    console.log(user);
    db.empList.update({_id:new mongojs.ObjectId(user._id)},user);
    db.empList.find({},function(err,data){
        res.send(data)
      });

})

app.listen(3000)
