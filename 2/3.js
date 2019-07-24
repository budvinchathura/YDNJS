//---------------------------------------------------
//Method 1 of hiding inner "a"

var a = 10;

function func1() {
    var a = 20;
    console.log("Inside func1  a = " + a);
}

func1();
console.log("Global scope  a = " + a);

//-----------------------------------------------------
//Method 2, much better, func1 does not pollute global scope

var a2 = 10;

(function func2() {
    var a2 = 100;
    console.log("Inside func2  a2 = " + a2);
})();

console.log("Global scope  a2 = " + a2);

//anonymous function can also be used
//but having a name for the function is better




//-----------------------------------------------
//------------------------------------------------
//both are identical
(function func3() { console.log("inside func3"); })();
(function func4() { console.log("inside func4"); }());



var obj1 = {
    prop1: "10",
    prop2: "mytext"
};

(function func5(passedObj) {
    console.log("Inside func5 " + passedObj.prop1 + " " + passedObj.prop2);
})(obj1);                   //passing parameters

//-----------------------------------------------
//-----------------------------------------------
//Another variant

var obj2 = {
    prop1: "999",
    prop2: "Hello"
};

(function func5(passedFunc) {
    passedFunc(obj2);
})(function passingFunc(passingObj) {            //passing this function for the inner function
    console.log("passingObj.prop1 = " + passingObj.prop1 + "       passingObj.prop2 = " + passingObj.prop2);
});

