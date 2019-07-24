"use strict";
//"a" represents the function not the returned value
//anonymous function, name of the function is "undefined"
var a = function () {
    return 10;
}

console.log("a = " + a);

//function is called and returned value is assigned to "val"
var val = a();
console.log("val = " + val);


//same as above scenario
//difference is, function has a name "func1"
var b = function func1() {
    return "func1 returned value";
}
console.log("b = " + b);
console.log("b.name = " + b.name);

var val2 = b();
console.log("val = " + val);