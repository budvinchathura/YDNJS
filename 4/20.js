//boolean


//falsy values

var a = undefined;
var b = null;
var c = false;
var d = 0;
var e = +0;
var f = -0;
var g = NaN;
var h = '';
var i = Boolean(false);         //coercion to boolean primitive type, not Object type

console.log(Boolean(a || b || c || d || e || f || g || h || i));        //false, beacuse all are false


//objects are truthy, irrespective of content

var obj1 = {
    prop1: 'some text'
};

var obj2 = new Boolean(false);
var obj3 = new Number(0);
var obj4 = new String('');

console.log(Boolean(obj1 && obj2 && obj3 && obj4));     //true


// //one exception
// console.log(Boolean(document.all));         // returns true only in old IE, legacy method to detect IE
//there are more 


//all strings are truthy irrespective of content except '' and ""

console.log(Boolean("false" && "0" && "''"));       //true

var m = [];
var n = {};
var p = function () { };

console.log(Boolean(m && n && p));      //true

//likewise there are almost infinitely many truthy values
//but small number of falsy values


