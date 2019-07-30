function func1() {
    var a = 10;
    let b = "my text";

    function innerFunc() {
        console.log("inside innerFunc  a = " + a, "   b = ", b);
    }

    a++;

    return innerFunc;
}

var myFunc = func1();           //assigns innerfunc to myFunc

myFunc();           //prints "a" and "b", 
//innerFunc has closure over the cope of func1



//another scenario

function func2() {
    var c = 999;

    function anotherInner() {
        console.log("inside anotherInner  c = " + c);
    }

    myFunc2(anotherInner);
}

function myFunc2(passedFunc) {
    passedFunc();                   //passedFunc has closure over func2
}

func2();



//another scenario - with timeout


var myDelay = 2000;

function wait(msg, delay) {
    setTimeout(function timer() {
        console.log(msg);
    }, delay);
}

wait("this will be displayed after " + myDelay + " milliseconds", myDelay);


function runInterval(msg,step,limit){
    var d = new Date();
    var counter = 0;
    var timerVar = setInterval(function(){
        if(counter == limit){
            clearInterval(timerVar);
        }
        console.log("from time to time "+msg+" "+counter+" "+d.getTime());
        counter++;
        
    },step);
}

runInterval("Hi",3000,5);
