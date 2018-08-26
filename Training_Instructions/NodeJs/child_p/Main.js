const cp = require('child_process');
const noden = cp.fork(`${__dirname}/child.js`);
noden.on('message',(m)=>{
	console.log('PARENT got message:',m);
});
noden.send({message:'I am in Main Process'});