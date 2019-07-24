"use strict";

//normal function
function func1(){
    console.log("Inside func1()");
    return 55;
}

//IIFE 
//called immediately
(function (){
    console.log("Inside func2()");
})();

//also an IIFE 
//can have a name
(function func3(){
    console.log("Inside func3()");
})();

var ans = func1();
console.log(ans);