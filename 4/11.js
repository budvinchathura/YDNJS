// zero

// both 0 and -0 exist in JS

console.log(0/3);
console.log(0/(-3));


//addition and subtraction never produce -0
var plus = 0;
var minus = -0;

// both are equal when compared
console.log(plus===minus);
console.log(plus>minus);

//check for negative zero
function isNegativeZero(val){
    return (val===0) && ((1/val)=== (-Infinity));
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-89));
console.log(isNegativeZero(0/-4));

// -0 is useful when the relevent varibale gives the direction information of something wtih the negative sign
