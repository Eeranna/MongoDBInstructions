console.log('==Error Events==');
var events = require('events');
var em4 = new events.EventEmitter();
try{
	em4.emit('error',new Error('oops!!!'));
}catch(err){
	console.log('This is user defined error plz contact admin!!!');
}
try{
	const m =10;
	//const z =20;
	const n = m+z;
	//console.log(n);
}catch(err){
	console.log('Please conact to admin!!!');
	//handling the error here
}