// "use strict";
var myObject = {
    a : 10
};

console.log(Object.getOwnPropertyDescriptor(myObject,"a"));

//adding a property in manual way
//same as myObject.b = 100
Object.defineProperty(myObject,"b",{
    value : 100,
    writable : true,
    configurable : true,
    enumerable : true
});

console.log(myObject.b);

//writable - write access to property

//configurable - being able to modify particular property's descriptor settings
//can add more properties

Object.defineProperty(myObject,"c",{
    value : 999,
    writable : false
});

console.log(myObject.c);
myObject.c = "new value for c";         //does not modify myObject.c, TypeError in strict mode
console.log(myObject.c);

//can not reconfigure setting of "d", but "d" is writable
//also can not delete "d"
Object.defineProperty(myObject,"d",{
    value : -50,
    configurable : false,
    writable: true
});


//error can not redefine
// Object.defineProperty(myObject,"d",{
//     value : "new value",
//     configurable : true,
//     writable:false
// });

console.log(myObject.d);
myObject.d = "another new value";       //ok, can be edited
console.log(myObject.d);
delete myObject.d;                      //does not work
console.log(myObject.d);

//make writable:false and configurable:false to create a constant property

Object.defineProperty(myObject,"e",{
    value : "constant value for e",
    writable:false,
    configurable:false
});

myObject.e = "new value for e";         //does not work
console.log(myObject.e);

var outerE = myObject.e;
outerE = "new value for E";
console.log(myObject.e);


//prevent further addition of properties

Object.preventExtensions(myObject);
myObject.f = "value for f";             //does not work
console.log(myObject.f);                //undefined

// Object.seal()  is preventExtensions and make everything configurable false


//Object.freeze() is Object.seal() and make everything writable false
//highest level of immutability


//these access modifiers does not affect inner objects
//inner array is still writable
var myObject2 = {
    arr : [4,5,6]
};

Object.freeze(myObject2);

var outerArr = myObject2.arr;
outerArr.push(10);
console.log(myObject2.arr);

//new assignment decouples the reference
outerArr = "new thing";                 //does not affect myObject2
console.log(myObject2.arr)
outerArr = [0,0,0];                     //does not affect myObject2
console.log(myObject2.arr)

