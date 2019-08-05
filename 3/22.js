//function is not a constrcutor
//but function calls are constructor calls when "new" keyword is used

function func1(data) {
    this.name = data;           //behaves as a constructor
}


//add a property to function prototype
//objects affected by constructor calls of func1 also has access to this new property
func1.prototype.show = function () {
    console.log(this.name);
}

var samefunc = func1;
console.log(samefunc);

var a = new func1("my name is a");
var b = new func1("my name is b");

//a,b themselves do not have "show" propety
//but their prototype has
a.show();
b.show();
console.log(a.hasOwnProperty("show"));      //false
console.log(b.hasOwnProperty("show"));      //false
console.log((Object.getPrototypeOf(a)).hasOwnProperty("show"));     //true
console.log((Object.getPrototypeOf(b)).hasOwnProperty("show"));     //true


//following all constructor points to same function, func1
console.log(func1.prototype.constructor === func1);
console.log(a.constructor === func1);
console.log(a.constructor === func1);