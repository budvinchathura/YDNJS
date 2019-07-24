var a = "40";
var b = Number(a);
console.log("\"a\" is a " + typeof a);
console.log("\"b\" is a " + typeof b);

var c = "50";
var d = c * 1;
var e = c + 5;                          //string concatanation
console.log(e);                     
console.log("\"c\" is a " + typeof c);
console.log("\"d\" is a " + typeof d);
console.log("\"e\" is a " + typeof e);
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({foo:"bar"}));
console.log(Boolean(function func(){return false}));        //function object is treated as true