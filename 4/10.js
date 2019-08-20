//infinity

// does not raise error
// assigns 'infinity'
var a = 56/0;
console.log(a);
//true
console.log(a===Infinity);
console.log(a===Number.POSITIVE_INFINITY);

// assigns -Infinity
var b = -10/0;
console.log(b);
console.log(b===-Infinity);
console.log(b===Number.NEGATIVE_INFINITY);

var c = Number.MAX_VALUE;
console.log(c+c);           //Infinity

console.log(Infinity/Infinity);     //NaN
console.log(67/Infinity);           //0
console.log(-67/Infinity);          //-0  !!!!


