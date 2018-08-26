var events = require('events');
var em = new events.EventEmitter();
let m = 0;
em.on('event',function(){
	console.log(++m);
});
em.emit('event');
//Prints:1
em.emit('event');
//Prints:2
var em1 = new events.EventEmitter();
let n = 0;
em1.once('event',function(){
	console.log(++n);
});
em1.emit('event');
//Prints:1
em1.emit('event');
//ignored
console.log('==EventListenerCount==');
var em2 = new events.EventEmitter();
em2.on('event',function(){});
em2.on('event',function(){});
em2.on('event',function(){});
em2.on('event',function(){});
em2.on('event',function(){});
em2.on('event',function(){});
console.log(events.listenerCount(em2,'event'));

console.log('==IO operations==');
var fs = require('fs');
var em3 = new events.EventEmitter();
var FileOp = function(name){
	console.log('Operation:'+name);
};
em3.on('Complete',FileOp);
em3.emit('Complete','Start Op');
fs.readFile('TestBlockingSampleData.txt',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
	em3.emit('Complete','Read Completed');
});