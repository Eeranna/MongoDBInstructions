var fs = require('fs');
//==========sync=====
//Synchronous code excutes sequentially line by line
//var data = fs.readFileSync('TestBlockingSampleData.txt','UTF-8');
var data = fs.readFileSync('TestBlockingSampleData.txt');//It will block the excution util read the file and it will go to the next line of code
console.log(data.toString());
console.info('\n');
console.log('Sychronous/Blocking code Ended');
console.info('\n');

//==========Async=====
//Asynhronous code excutes callback function means non sequentially
fs.readFile('TestBlockingSampleData.txt',function(err,data){//It won't block the excution, while reading file it will move to the next line of code
	if(err) return console.err(err);
	console.log(data.toString());
});
console.info('\n');
console.log('Asynhronous/Non Blocking Program Ended');
console.info('\n');