var a = 40;
var b = "40";
console.log("a==b -> "+(a==b));         //coercion allowed
console.log("a===b -> "+(a===b));       //coercion not allowed

console.log("true==a -> "+(true ==a));  //true is converted to 1, hence returns false
console.log("true===a -> "+(true===a));

console.log("0==false ->" + (0==false));    //false is converted to 0, returns true
console.log("[]==false -> "+([]==false));   //[] converted to 0, returns true
console.log("[]==0 -> "+([]==0));           //returns true

var arr1 = [1,2,3];
var arr2 = [1,2,3];
var arr3 = arr1;
var str = "1,2,3";
console.log("arr1 == arr2 -> "+(arr1 == arr2));
console.log("arr1 == arr3 -> "+(arr1 == arr3));
console.log("arr1 == str -> "+(arr1 == str));



