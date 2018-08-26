process.on('message',(m)=>{
	console.log('CHILD got message:',m);
});
process.send({childmessage:'I am in child process'});