console.log('Test')

//variables
var a = 'Eeranna';
console.log(a);

console.log(typeof a);

if(a=='eeranna')
console.log('Yes');
else
console.log('No');

//var d = new Date();
//var n = d.getDay()
var n = new Date().getDay();

switch(n) {
    case 1:
        console.log('Happy Monday');
        break;
    case 2:
        console.log('Happy Tuesday');
        break;
	case 3:
        console.log('Happy Wednesday');
        break;
	case 4:
        console.log('Happy Thursday');
        break;
	case 5:
        console.log('Happy Friday');
        break;
	case 6:
        console.log('Happy Saturday');
        break;
	case 6:
        console.log('Happy Sunday');
        break;
    default:
        console.log('got problem');
}

var month = new Date().getMonth();

switch(month){
	//January,February,March
	case 0:
	case 1:
	case 2:
		console.log('Winter');
		break;
	//April,May,June
	case 3:
	case 4:
	case 5:
		console.log('Summer');
		break;
	//July,August,September
	case 6:
	case 7:
	case 8:
		console.log('Rainy');
		break;
	default:
        console.log('default');
}

for(i=0;i<5;i++){
	//print each iteration to the console
	console.log(i);
}

var names = ['Jay','Ajay','Sanjay','Vijay'];
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var emp = {
	name: 'Eeranna',
	role: 'devloper',
	numberOfBooks: 1
}
for(var attribute in emp){
	console.log(attribute);
}
for(var attribute in emp){
	console.log(emp[attribute]);
}
for(var attribute in emp){
	console.log(`${attribute}`.toUpperCase()+`:${emp[attribute]}`);
}

var splitStr = 'Jayvant';
for(var str of splitStr){
	console.log(str);
}

//omit all statemets
for(;;){
	if(i>4){
		break;
	}
	console.log(i);
	i++;
}
console.log('---');
var whilenumber = 5;
while(whilenumber > 0){
	console.log(whilenumber);
	whilenumber--;
}

//console.log(process.argv);
//var test = process.argv.slice(2);
//console.log(test);
console.log(__dirname);
console.log(__filename);

//include,ref,using
var path = require('path');
console.log(`This output is from file ${path.basename(__filename)}`);
console.log(`${path.basename(__dirname)}`);
console.log(`${path.extname(path.basename(__filename))}`);
