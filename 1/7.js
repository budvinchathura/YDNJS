var a = 40;
var b = "42";
var c = "43";

console.log("a<b -> "+(a<b));           //numerical comprisona
console.log("a<c -> "+(a<c));           //numerical
console.log("b<c -> "+(b<c));           //lexographic

var x = 100;
var y = "text";

//all are false
//"y" is converted to NaN
//Nan is neither grater than or less than any other value
console.log("x>y -> "+(x>y));
console.log("x<y -> "+(x<y));

console.log("x==y -> "+(x==y));     //"x" is converted to "100", returns false


console.log("x===y -> "+(x===y));