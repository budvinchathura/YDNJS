// numbers
// all numbers are floating point 6f bit precision
var a = 10;
var b = 10.0;
var c = 10.;

// all true
console.log(a === b);
console.log(b === c);
console.log(a === c);

var d = 0.7;
var e = .7;
// true
console.log(d === e);


var f = 1223.45;
console.log(f);
console.log(f.toExponential());         //exponential notation, does not change f

//converted to exponential notation automatically
var g = 87687687686886686876868;
console.log(g);

// number varibale is not essential to use the functions of Number.prtotype

console.log((3434.678).toPrecision(3));

//this won't work beacuse what comes after . is the fractional part
// have to use parantheses
// console.log(40.toFixed());   

// this works!
// but looks strange
console.log(4087686..toPrecision(4));

//also works with space(s)
// but not a good practice
console.log(353767 .toFixed(2));

// numbers can be defined expicitly with exponential form

var h = 79.87E7;
console.log(h);

// other bases

// octal
var oct = 045;
var oct2 = 0o44;
var oct3 = 0O33;         //bigger O is not preffered

console.log(oct);
console.log(oct2);
console.log(oct3);


//binary
//small b is preffered
var bin = 0b110101;
var bin2 = 0B1101;
console.log(bin);
console.log(bin2);

//hex
// smal x is preffered
var hex = 0x67AB;
var hex2 = 0XAA;
console.log(hex);
console.log(hex2);

//floating values are not exact

console.log((0.1 + 0.2) === 0.3);       //returns false


// use EPSILON as a tolerence when comparing

function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1, 0.2));



