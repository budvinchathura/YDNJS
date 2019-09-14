// native prototypes

//all have type 'object'
console.log(typeof String.prototype);
console.log(typeof Number.prototype);
console.log(typeof Boolean.prototype);
console.log(typeof Array.prototype);
console.log(typeof Object.prototype);
console.log(typeof RegExp.prototype);

//type = function
console.log(typeof Function.prototype);


//all are false
console.log(String.prototype instanceof String);
console.log(Number.prototype instanceof Number);
console.log(Boolean.prototype instanceof Boolean);
console.log(Array.prototype instanceof Array);
console.log(Function.prototype instanceof Function);
console.log(Object.prototype instanceof Object);
console.log(RegExp.prototype instanceof RegExp);



//prototypes can be used as default values

var emptyArr = Array.prototype;
// using emptyArr = [] creates garbage values

console.log(emptyArr);

//do not modify them
//if modified, original prototype would be modified!!!
emptyArr.push('12');        // modifies Array.prototype
console.log(Array.prototype);

