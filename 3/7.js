//new keyword
//constructors
//In js, constrcutors are not special functions
//They are also same as ordinary functions

function func1(data){
    this.a = data;
}

//new keyword binds myFunc object as "this" of func1
var myFunc = new func1(20);
console.log(myFunc.a);          //20
console.log(func1.a);           //undefined, binding does not affect func1

var myFunc2 = new func1(1000);  //new instance
console.log(myFunc2.a);         //1000

console.log(myFunc.a);          //20, previous instance still exists


