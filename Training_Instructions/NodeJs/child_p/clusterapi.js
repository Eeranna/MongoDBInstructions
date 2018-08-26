var cluster = require('cluster');
var threads = 5;
cluster.setupMaster({
	exec:'forknode.js',
});

for(var i=0; i<threads; i++){
	cluster.fork();
}