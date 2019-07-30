//function hoisting

func1();        //typeError
var func1 = function(){
    console.log("inside function");
};
//func1 var decleration is hoisted but initialization is not hoisted
//func1() can not be executed becaused it should be initialized as a function

//above code is same as

var func1;
func1();
func1 = function(){
    console.log("inside function");
};