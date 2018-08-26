var events = require('events');
var em = new events.EventEmitter();

em.on('event',function(){
	console.log('An Event occurred!');
});

em.emit('event');
em.emit('event');
em.emit('event');