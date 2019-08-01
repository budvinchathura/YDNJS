//functions get a property called prototype
//not objects

//when function does not return an object
function func1() {
    console.log("hi");
}

var a = new func1();
var b = new func1();

console.log(a);
console.log(b);

// a();            //error, not a function

//all return true
console.log(Object.getPrototypeOf(a) === func1.prototype);
console.log(Object.getPrototypeOf(b) === func1.prototype);
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b));

//true
console.log(func1.prototype.constructor === func1);
console.log(a.constructor === func1);           //but here "a" does not actually have a property called constructor


//------------------------------------------------------

//when function returns and object

function func2() {
    console.log("func2 executed");
    return { prop: "value..." };                      //this object is assigned to the calling variable
}

var c = new func2();
console.log(c);
console.log(c.prop);
console.log(Object.getPrototypeOf(c) === func2.prototype);        //false, beacsue function returned whole new object
console.log(c.constructor === func2);           //false
