function func1(){
    console.log(this.x);        //"this" recolves to global object

}

function func2(){
    "use strict";
    console.log(this.a);
}

//only use global.x in node environment, otherwise var x = 100 is sufficient
global.x = 100;             

func1();            //100
func2();            //"this" is undefined