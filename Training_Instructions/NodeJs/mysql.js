var mysql = require("mysql");
var connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'test'
});

connection.query("SELECT * FROM ACCOUNT",function(err,accounts){
	if(err)console.log(err);
	console.log(accounts[0]);
});