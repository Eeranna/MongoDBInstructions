//console.log("Welcome to typescript");
//The scope of a JavaScript variable declared outside the function is global
var a = 2300;
function varExam() {
    //varuable declarations are processed before the execution of the codePointAt
    var a = 10;
    console.log("Local to function=>" + a); //output 10
    if (true) {
        //The re-declarations scope of a javascript variable declared with var is it current execution context.
        var a_1 = 20;
        console.log("Local to block=>" + a_1); //20
    }
    //const a=100;//can not re declare block variable
    //a=100;re assign is not allowed
    console.log("Local to function after redeclaration => " + a); //10
}
varExam();
console.log("Global Scope=>" + a);
function nultyp() {
    //The Null Data type	
    var a = null; //ok
    var b = null; //ok
    var c = null; //ok
    var d = null; //ok
    var g = undefined; //ok
    var h = null; //ok
    var i = undefined; //ok
    var j = undefined; //ok
}
nultyp();
