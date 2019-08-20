// Strings
// string have some functions of Arrays

// strings are immutable
// arrays are quite mutable

var myStr = 'abc';
var myArr = ['a','b','c'];

console.log(myStr);
console.log(myArr);

console.log();

console.log(myStr.length);
console.log(myArr.length);

console.log();

myStr[1] = 'X'          //does not modifies string
myArr[1] = 'X'          //array is modified

console.log(myStr);
console.log(myArr);

// var myStr2 = myStr.join('-')        //error, join is not function of String
// console.log(myStr2)


// we can add the missing feature
// borrowed from Array
String.prototype.join = function(sep){
    return Array.prototype.join.call(this,sep);
};

var myStr2 = myStr.join('-');        
console.log(myStr2);

//some borrowing may not work as strings are immutable
// causes error
// String.prototype.rev = function(){
//     Array.prototype.reverse.call(this);
// };

// myStr.rev();
// console.log(myStr);

console.log(myStr.split(""));       //prints array version
console.log(myArr.join('|'));       //prints string version


