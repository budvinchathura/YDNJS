//safe integers
//safe integer is an integer between -(2^53-1) , (2^53-1)
console.log(Number.isSafeInteger(2**53 - 1));
console.log(Number.isSafeInteger(-(2**53) + 1));

// al are false
console.log(Number.isSafeInteger(2**53));
console.log(Number.isSafeInteger(8787.9));
console.log(Number.isSafeInteger(null));
console.log(Number.isSafeInteger(undefined));
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));

// to convert to a safe signed integer simply bitwise 'or' with 0
// when 'or' is peformed only 32 bits are considered and others are droppped
var a = 4545.984
console.log(a|0);
console.log(Number.isSafeInteger(a|0));
a = 2**53 + 7
console.log(a|0);
console.log(Number.isSafeInteger(a|0));


