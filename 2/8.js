//function decleration is hoisted first
//then variable decleration

func1();

var func1;

function func1(){
    console.log("inside func1 first decleration");          //this version is callled
}

func1 = function () {
    console.log("inside func1 second initialization");
};

//above code is same as

function func2(){
    console.log("inside func2 first decelration");
}

func2();

func2 = function(){
    console.log("inside func2 second initialization");
};