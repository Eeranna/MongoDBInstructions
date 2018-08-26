const {spawn} = require('child_process');
const child = spawn('node',['Server.js'],{
	detached:true,
	stdio:'ignore'
});
child.unref();