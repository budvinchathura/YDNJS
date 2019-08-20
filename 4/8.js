// undefined

console.log(typeof undefined);


//error 
// var a = undefined;
// undefined is not object type
// its type is 'undefined'
// console.log(a instanceof undefined);

//possible to create a variable named 'undefined'
//really bad idea
// var undefined = 'some_value';
// console.log(undefined);             //prints 'some_value'

//void keyword evaluates the expression but returns 'undefined'
var a = 10;
var b = void a++;           //increments a
console.log(a,b);
console.log(void true)      //undefined
// by convention void 0 is used to return undefined value





