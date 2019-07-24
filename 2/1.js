// "use strict";
var a = -10;

function func1() {
    // console.log("Inside func1" +
    //     "\na = " + a +
    //     "\nb = " + b);                  //error, b not defined

    //now we define "b", but it is defined as a global variable
    b = 20;                 //if strict mode is used, this is not possible
    console.log("Inside func1" +
        "\na = " + a +
        "\nb = " + b
        +"\n");
    if (a > 0) {
        c = 100;                //also defined in global scope
    } else {
        c = "some text";        //also defined in global scope
    }

}

func1();

console.log("global scope  b = " + b);
console.log("global scope  c = " + c);
