//console.log("Welcome to typescript");
//The scope of a JavaScript variable declared outside the function is global
const a = 2300;
function varExam(){
	//variable declarations are processed before the execution of the codePointAt
	const a = 10;
	console.log("Local to function=>"+a);//output 10
	if(true){
		//The re-declarations scope of a javascript variable declared with var is it current execution context.
		const a = 20;
		console.log("Local to block=>"+a);//20
	}
	//const a=100;//can not re declare block variable
	//a=100;re assign is not allowed
	console.log("Local to function after redeclaration => "+a);//10
}
varExam();
console.log("Global Scope=>"+a);

//the Number data type
function numdtyp(){
	let a:number = undefined;//Error
	let b:number=null;//error
	let c:number=3;
	let d:number=Ob111001;//binary
	let e:number=Oo436;//Octal
	let f:number=Oxadf0d;//Hexadecimal
	//Not Allowed Type "'cat'" is not assignable to type
	//let g:number="cat";//Error
}
numdtyp();
//The String Data Type
function strdttyp(){
	let a:string=undefined;//Ok
	let b:string=null;//Ok
	let c:string="";
	let d:string="y";
	let e:string="
	
}
//The Arry and Tuple data types
function tplarrdtyp(){
	//With strctNull
	let c:string="";
	let d:string="y";
	let e:string="building";
	//let f:string=3;/error
	let g:string="3";
	let h:number[]=[1,2,3,4];
	let i:string[]=["a","apricot","mango"];
	let j:string[]=["a","apricot","mango"];
	let j:number[]=[1,"apple","potato"];//Error
}
tplarrdtyp();

function anytyp(){
	let a:any="apple";
	let b:any=14;
	let c:any=false;
	let d:any[]=["door","kitchen",13,false,null];
	
	b="people";
}
anytyp();
function nltyp(){
	//The Null Data type	
		let a:null=null;//ok
		let b:undefined=null;//ok
		let c:number=null;//ok
		let d:void=null;//ok
		let g:undefined=undefined;//ok
		let h:undefined=null;//ok
		let i:number=undefined;//ok
		let j:void=undefined;//ok
}
nultyp();
function nultyp(){
	//The Null Data type	
		let a:null=null;//ok
		let b:undefined=null;//ok
		let c:number=null;//ok
		let d:void=null;//ok
		let g:undefined=undefined;//ok
		let h:undefined=null;//ok
		let i:number=undefined;//ok
		let j:void=undefined;//ok
}
nultyp();