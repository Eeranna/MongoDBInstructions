var mongojs = require('mongojs');

//var db = mongojs('demo');
//db.emp.find(function(err,res){console.log(res)});

//var db = mongojs('ltitest');
//var query = db.lti;
//query.find(function(err,res){console.log(res);console.log('Before')});
//query.insert({_id:1,'Name':'jay'});
//query.find(function(err,res){console.log(res)});

var db = mongojs('demo');
var query = db.emp;
//query.find(function(err,res){console.log(res)});
//query.find({"dept":"HR"},{_id:0,firstName:0,Salary:0},function(err,res){console.log(res)});
//query.find({Salary:{$gt:90000}},function(err,res){console.log(res)});
//query.find({Salary:{$gte:90000}},function(err,res){console.log(res)});
//query.find({Salary:{$lte:90000}},function(err,res){console.log(res)});
//query.find({Salary:{$gte:10000},Salary:{$lte:20000}},function(err,res){console.log(res)});
//query.find({dept:"Purchase"},function(err,res){console.log(res)});
//query.find({"City":"Mumbai"},{id:1,firstName:1},function(err,res){console.log(res)});
//query.find({"dept":{$in:(["HR","Design","Sales"])}},function(err,res){console.log(res)});
//query.find({},{_id:0,Salary:1}).sort({Salary:-1},function(err,res){console.log(res)});
//query.find({id:{$eq:1501}},function(err,res){console.log(res)});
//query.find({firstName:/^D.*/},function(err,res){console.log(res)});
//query.find({firstName:/^D.*/},function(err,res){console.log(res)});
//query.find({firstName:/.*e$/i},function(err,res){console.log(res)});
//query.find({firstName:/^a.*y$/i},function(err,res){console.log(res)});
//query.find({$and:[{dept:"Admin"},{City:"Mumbai"}]},function(err,res){console.log(res)});
//query.find({$or:[{dept:"Admin"},{City:"Mumbai"}]},function(err,res){console.log(res)});
//query.find({$and:[{Salary:{$gt:1000}},{City:{$in:["Mumbai","Pune","Jalgaon","Nashik"]}}]},function(err,res){console.log(res)});

//Aggregate
//query.aggregate({$match:{Salary:91000}},function(err,res){console.log(res)});
//query.aggregate({$match:{dept:"HR"}},{$project:{firstName:1,mname:1,lastName:1,_id:0}},function(err,res){console.log(res)})
//query.aggregate({$match:{Salary:{$gt:10000}}},function(err,res){console.log(res)});
//query.aggregate({$match:{Salary:{$lt:100000}}},function(err,res){console.log(res)});

//query.aggregate({$match:{firstName:"Tom"}},{$project:{firstName:1}},function(err,res){console.log(res)});
//query.aggregate({$match:{firstName:"Tom"}},{$project:{_id:1,firstName:1}},function(err,res){console.log(res)});
//query.aggregate({$match:{Salary:91000}},{$project:{_id:0,firstName:1}},function(err,res){console.log(res)});
//query.aggregate({$match:{dept:"HR"}},{$project:{_id:0,firstName:1,mname:1,lastName:1}},function(err,res){console.log(res)});
//query.aggregate({$match:{Salary:{$gte:10000,$lte:20000}}},function(err,res){console.log(res)});
//query.aggregate({$match:{Salary:{$lt:91000}}},function(err,res){console.log(res)});
//query.aggregate({$match:{Salary:{$gte:150000}}},function(err,res){console.log(res)});
//query.aggregate({$match:{Salary:{$lte:200000}}},function(err,res){console.log(res)});
//query.aggregate({$match:{id:{$eq:1501}}},function(err,res){console.log(res)});
//query.aggregate({$match:{id:{$ne:1501}}},function(err,res){console.log(res)});
//query.aggregate({$match:{dept:{$in:["HR","Design","Sales"]}}},function(err,res){console.log(res)});
//query.aggregate({$match:{dept:{$nin:["Production","purchase"]}}},function(err,res){console.log(res)});
//query.aggregate({$match:{$and:[{dept:"Admin"},{City:"Mumbai"}]}},function(err,res){console.log(res)});
//query.aggregate({$match:{$and:[{Salary:{$gt:50000}},{City:{$in:["Mumbai","Pune","Jalgaon"]}}]}},function(err,res){console.log(res)});
//query.aggregate({$match:{$and:[{City:"Mumbai"},{dept:"Admin"}]}},function(err,res){console.log(res)});
//query.aggregate({$match:{$or:[{City:"Pune"},{dept:"Admin"}]}},function(err,res){console.log(res)});
//query.aggregate({$match:{$nor:[{City:"Pune"},{dept:"Mumbai"}]}},function(err,res){console.log(res)});
//query.aggregate([{$match:{"Dept":{$in:(["Production","purchase"])}}},{$project:{"firstName":1,"_id":0,"Salary":1}}],function(err,res){console.log(res)});
//query.aggregate([{$match:{"Dept":{$in:(["Production","purchase"])}}},{$project:{"firstName":1,"_id":0,"Salary":1}}],function(err,res){console.log(res)});

//Group
//query.aggregate([{$group:{_id:"$dept"}}],function(err,res){console.log(res)});
//query.aggregate([{$group:{_id:"$dept",Salary:{$min:"$Salary"}}}],function(err,res){console.log(res)});
//query.aggregate([{$group:{_id:"Min",Salary:{$min:"$Salary"}}}],function(err,res){console.log(res)});
//query.aggregate([{$group:{_id:"Max",Salary:{$max:"$Salary"}}}],function(err,res){console.log(res)});
//query.aggregate([{$group:{_id:"$Dept",AvgSalary:{$avg:"$Salary"},MinSalary:{$min:"$Salary"},MaxSalary:{$max:"$Salary"}}}],function(err,res){console.log(res)});
//query.aggregate([{$group:{_id:"$dept",SalaryAvg:{$avg:"$Salary"},Salarymin:{$min:"$Salary"},Salarymax:{$max:"$Salary"}}}],function(err,res){console.log(res)});
//query.aggregate({$group:{_id:"$dept",Count:{$sum:1}}},function(err,res){console.log(res)});
//query.aggregate({$group:{_id:"ALL",Count:{$sum:1}}},function(err,res){console.log(res)});
//query.aggregate({$match:{City:{$in:["Mumbai","Pune"]}}},{$group:{_id:"$dept",Salary:{$min:"$Salary"}}},function(err,res){console.log(res)});

//update
//query.update({id:1621},{$set:{Salary:4000}},function(err,res){console.log(res)});
//query.update({id:1621},{$inc:{Salary:1000}},function(err,res){console.log(res)});
//query.update({id:1621},{$min:{Salary:4000}},function(err,res){console.log(res)});
//query.update({id:1621},{$max:{Salary:5000}},function(err,res){console.log(res)});
//query.update({id:1621},{$set:{Company:"LTI"}},function(err,res){console.log(res)}); => If field is not there it will add new field
//query.update({id:1621},{$rename:{Company:"Comp"}},function(err,res){console.log(res)});
//query.update({id:1621},{$rename:{Company:"Comp"}},function(err,res){console.log(res)});

//query.update({id:1000},{$set:{Company:"Zensar"}},{upsert:true},function(err,res){console.log(res)});
//query.update({},{$set:{Company:"Zensar"}},{multi:true},function(err,res){console.log(res)});
//query.update({City:{$in:["Nashik","Jalgaon"]}},{$inc:{Salary:1000}},{multi:true},function(err,res){console.log(res)});
//query.update({City:{$in:["Mumbai","Pune"]}},{$inc:{Salary:-1000}},{multi:true},function(err,res){console.log(res)});
//query.update({$and:[{Salary:{$lte:30000}},{City:{$in:["Mumbai","Pune","Jalgaon","Nashik"]}}]},{$inc:{Salary:10000}},{multi:true},function(err,res){console.log(res)});
//query.update({$and:[{Salary:{$gte:110000}},{City:{$in:["Mumbai","Pune","Jalgaon","Nashik"]}}]},{$inc:{Salary:-10000}},{multi:true},function(err,res){console.log(res)});

