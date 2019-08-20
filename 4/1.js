console.log(typeof undefined === "undefined");
console.log(typeof true === "boolean");
console.log(typeof 42 === "number");
console.log(typeof "42" === "string");

console.log(typeof Object === "object");    //false
//"Object" is the constructor, so it is a function
console.log(typeof Object);

console.log(typeof new Object() === "object");  //true

console.log(typeof Symbol() === "symbol");


//"null" is a falsy object
console.log(typeof null === "null");        //false
console.log(typeof null === "object");      //true
console.log(!null);     //true, "null" is a falsy value

var functionVar = function(){};

console.log(typeof functionVar);
console.log(typeof functionVar === "object");
console.log(typeof functionVar === "function");

console.log(typeof [1,2,3] === "object");
console.log(typeof [1,2,3] === "array");        //false
