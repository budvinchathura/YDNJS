//modules
function func1() {
    //these variables are more like hidden to global
    var a = "my text";
    var b = [4, 5, 6];
    var counter = 0;

    function doA() {
        console.log(a);
    }

    function doB() {
        console.log(b.join("|"));
    }

    function doC(){
        console.log(counter);
    }

    function incr(){
        counter++;
    }

    return {
        action1: doA,
        action2: doB,
        increment: incr,
        printC: doC
    };
}

var myModule = func1();

myModule.action1();
myModule.action2();

//create seperate instances of module
var mod1 = func1();
var mod2 = func1();
mod1.increment();
mod1.increment();
mod1.printC();
mod2.printC();


console.log("copying");
//same instance
var mod1cpy = mod1;
mod1cpy.increment();
mod1.printC();
mod1cpy.printC();
mod2.printC();