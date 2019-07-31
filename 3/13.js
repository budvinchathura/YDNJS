function func1(){
    console.log("inside func1");
}

var myobj = {
    do:func1
};

var func1cpy = func1;
var func1cpy2 = myobj.do;

//all points to the same function
//different references for same function
func1();
myobj.do();
func1cpy();
func1cpy2();


//same scenario here
var myobj2 = {
    do2: function(){
        console.log("inside another function");
    }
};

var anothrFunc = myobj2.do2;
myobj2.do2();
anothrFunc();