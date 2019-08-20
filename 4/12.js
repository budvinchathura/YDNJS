//checking for special equalitites in ES6

//used when == or === is not safe

var minusZ = -0;
var notaN = NaN;
console.log(Object.is(minusZ,-0));
console.log(Object.is(notaN,NaN));

console.log(Object.is(undefined,NaN));      //false