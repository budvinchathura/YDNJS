//hoisting

//in this code snippet, var a is first compiled and
//then a = 2 is interpreted
a = 2;
var a;
console.log(a);         //prints 2

//above code is same as
// var a;
// a = 2;
// console.log(a);
//it means var a deceleration is hoisted up

//--------------------------------------------------------
//another scenario

console.log(b);         //prints undefined
var b = 200;

//above code is same as
// var b;                  //decleration is hoisted
// console.log(b);
// b=200;

//---------------------------------------------------------

//hoisting is per scope

function func1(){
    console.log("inside func1  d = "+d);    //prints undefined
    console.log("inside func1  e = "+e);    //referenceError
    var d = 2;
    e = 100.78;                             //leak to global
}

func1();
// console.log("global scope   d = "+ d);      //reference error, "d" is not in global scope
console.log("global scope   e = "+ e);          //prints 100.78