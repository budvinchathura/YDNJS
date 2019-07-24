//with "use strict", can not cheat lexical scope
// "use strict";


eval("var myvar = 20");         //evaluates expression
console.log("myvar = "+ myvar);

var a = 10;
var b = "text123"

function func1(exp){
    eval(exp);              //cheating, "b" originally inside func1
    console.log(a,b);       //finds "b" inside func1, hides global "b"
                            //if "use strict" is used, finds global "b"
}

func1("var b = 1000");

