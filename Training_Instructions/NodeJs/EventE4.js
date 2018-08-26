var keypress = require('keypress');
randomstring = '';
function randomString(){
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var string_length = 1;
	
	for(var i=0; i<string_length;i++){
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring = chars.substring(rnum,rnum+1);
	}
	console.log('Press Key =>'+randomstring+' to learn Abc from keyboard');
}
randomString();
//make 'process.stdin' begin emitting 'keypress' events
keypress(process.stdin);
//listen for the 'keypress' event
process.stdin.on('keypress',function(ch,key){
	var lettr = key.sequence;
	if(randomstring == lettr)
		console.log('got "keypress"',key.sequence);
	else
		console.log(randomstring+"You lost"+lettr);
randomString();
process.stdin.setRawMode(true);
process.stdin.resume();
	if(key&&key.ctrl&&key.name=='c'){
		process.stdin.pause();
	}
});