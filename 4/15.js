// arrays
// there is no primitve type for arrays

//all produce Object with array type
var a = new Array([1, 2, 3]);
var b = Array([4, 5, 6]);
var c = [7, 8, 9];


//same outputs for a,b,c
console.log(typeof a);          //Object
console.log(a instanceof Array);    //true
console.log(a instanceof Object);   //true

//if only one argument is passed, array is (kinda) presized
//but there are no slots in array
//this method is not recommented when creating arrays
var d = new Array(5);
console.log(d);
console.log(d.length);      //prints 5

console.log(d[2]);          //prints undefined, but that slot does not hold 'undefined' value, it is empty
console.log(d.join('-'));       //prints ----

var e = [undefined,undefined,undefined];
console.log(e.length);          //3
console.log(e[2]);          //here, Array e actually holds 'undefined' values
console.log(e.join(','));  //2 commas because undefined values are moitted when joining

var f = [1,2,2];
f.length = 10;          //just like the case in Arrray d
console.log(f);
console.log(f.length);

//to create array with undefined objects
//Array constructor function iterates the given object upto the given length
//retrives values from that object by the iterating index
//but here keys with those indexes do not exist in the object
//thus they return 'undefined' value
var g = Array.apply(null,{length:3});
console.log(g);
console.log(g.length);
