function func1(){
    console.log("inside func1");
}

var a = new func1();

//all return true
console.log(func1.prototype.constructor === func1);
console.log(a.constructor === func1);
console.log(Object.getPrototypeOf(a).constructor === func1);

//changing "constructor" property in func1.constructor
console.log("changing \"constructor\" property in func1.constructor");
func1.prototype.constructor = "something";

//all return false, we changed "constructor" property
console.log(func1.prototype.constructor === func1);     
console.log(a.constructor === func1);
console.log(Object.getPrototypeOf(a).constructor === func1);


console.log(func1.prototype.constructor === a.constructor);     //true

//changing whole "prototype" of func1
console.log("changing whole \"prototype\" of func1");
func1.prototype = {some:"value"};
console.log(func1.prototype);

//now func1.prototype does not have "constructor" property
//func1.prototype.constrcutor points to "constructor" propety of prototype of "Object" 
console.log(func1.prototype.constructor === func1);     //false
console.log(func1.prototype.constructor);
console.log(func1.prototype.constructor === Object.prototype.constructor);      //true
console.log(func1.prototype.constructor === Object);            //true


//adding back constructor property to func1.prototype

func1.prototype.constructor = func1;

//now all return true

//all return true
console.log(func1.prototype.constructor === func1);
console.log(a.constructor === func1);
console.log(Object.getPrototypeOf(a).constructor === func1);



