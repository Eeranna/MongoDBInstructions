function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mail_id != undefined)
        console.log("Email Id:", mail_id);
}
disp_details(123, "Eeranna");
disp_details(111, "Kuruva", "kuruva@gmail.com");
function deflt(bar, bas) {
    if (bas === void 0) { bas = 'hello'; }
    console.log(bar, bas);
}
deflt(123); //123,hello
deflt(123, 'welcome'); //123,welcome
//Anonymous function
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//Recursion
function factorial(number) {
    if (number <= 0) { //termination case
        return 1;
    }
    else {
        return (number * factorial(number - 1)); //function invoke itself
    }
}
;
console.log(factorial(6));
//Anonymous Recursion Function
(function () { var x = "Hai!!"; console.log(x); })();
//arrow function/Lambda Expression
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
var disp = function () { console.log("Function Invoked"); };
disp();
//Function Constructor
var myFunction = new Function("a", "b", "c", "return a*b*c");
var x = myFunction(4, 3, 4);
console.log(x);
//Closer type1
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    function bar() {
        console.log(variableInOuterFunction);
        //Access a variable from the outer scope
    }
    //call the local function to demonstrate that it has access to arg
    bar();
}
outerFunction("hello closure"); //logs hello closure!
//Closer type2
//We have defined a function makeAdder(x),which takes a single argument,x,
//and returns a new function. The function it returns takes a single
//arguments,y,and returns the sum of x and y.
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); //7
console.log(add10(2)); //12
