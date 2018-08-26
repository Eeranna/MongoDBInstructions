/*var exec = require('child_process').exec;
exec('dir',function(err,stdout){
	console.log('stdout:'+stdout);
	if(err!==null){
		console.log('exec error:'+err);
	}
});*/
const execFile = require('child_process').execFile;
const child = execFile('mongod',['-version'],function(error,stdout,stderr){
	if(error){
		console.error('stderr',stderr);
		throw error;
	}
	console.log('stdout',stdout);
});
	