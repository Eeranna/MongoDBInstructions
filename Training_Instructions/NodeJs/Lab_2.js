//var args = require('yargs').argv;
//console.log('Name:'+args.name);
//console.log('Age:'+args.age);
//node Lab_2.js --name jay --age 34

var args = require('yargs').argv;
var a = args.value1;
var b = args.value2;
var c = args.value3;
if(a == '+'){
	console.log(b+c);
} else if(a == '-'){
	console.log(b-c);
} else if(a == '*'){
	console.log(b*c);
} else if(a == '/'){
	console.log(b/c);
}

if(b == '+'){
	console.log(a+c);
} else if(b == '-'){
	console.log(a-c);
} else if(b == '*'){
	console.log(a*c);
} else if(b == '/'){
	console.log(a/c);
}

if(c == '+'){
	console.log(a+b);
} else if(c == '-'){
	console.log(a-b);
} else if(c == '*'){
	console.log(a*b);
} else if(c == '/'){
	console.log(a/b);
}