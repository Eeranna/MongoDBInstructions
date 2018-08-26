var events = require('events');
var em = new events.EventEmitter();
var topicfunc = function(name) {
	console.log('Topic Name:'+name);
};
em.on('topic',topicfunc);
em.on('example',function(msg){
	//do something
	console.log('message:'+msg);
});

//Execute the application
em.emit('topic','Node');
em.emit('topic','Express');
em.emit('example','this is the first example');
em.emit('example','this is the second example');
em.emit('example','welcome to nodejs');