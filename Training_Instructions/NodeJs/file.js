var xlsx = require('node-xlsx');
var mongojs = require('mongojs');
var fs = require('fs');
var obj = xlsx.parse(__dirname+'/All_Samp_Data.xls');//parses a file
var sheet = obj[0];
//var a = '';
//console.log(sheet['data'][0][0]);
//a+="{";
//a+="\""+sheet['data'][0][0]+"\":\""+sheet['data'][1][0]+"\","+"\'"+sheet['data'][0][1]+"\':\'"+sheet['data'][1][1]+"\',"+"\'"+sheet['data'][0][2]+"\':\'"+sheet['data'][1][2]+"\',"+"\'"+sheet['data'][0][3]+"\':\'"+sheet['data'][1][3]+"\',"+"\'"+sheet['data'][0][4]+"\':\'"+sheet['data'][1][4]+"\',";
//a+="\'"+sheet['data'][0][5]+"\:\'"+sheet['data'][1][5]+"\',"+"\'"+sheet['data'][0][6]+"\':\'"+sheet['data'][1][6]+"\',"+"\'"+sheet['data'][0][7]+"\':\'"+sheet['data'][1][7]+"\'";
//a+="}";
//console.log(a);


for(var i=0;i<sheet['data'].length;i++){  
	var a="";  
	a+="{";  
	for(var j=0;j<8;j++){  
		if(j<7)  
			a+="\""+sheet['data'][0][j]+"\":\""+sheet['data'][i][j]+"\",";  
		else  
			a+="\""+sheet['data'][0][j]+"\":\""+sheet['data'][i][j]+"\"";  
		}  
	a+="}";  
	console.log(JSON.parse(a));  
	//Insert
	var db = mongojs('ltitest');
	var query = db.filetest;
	query.find(function(err,res){console.log(res);console.log('Before')});
	query.insert(JSON.parse(a));
}










