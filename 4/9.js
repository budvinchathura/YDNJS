//NaN

var a = 4/'some text';
console.log(a);

// NaN is not equal to any number, not even for NaN
console.log(a === NaN);

// still the type is Number
console.log(typeof a)

//check whether a variable is NaN
console.log(isNaN(a));
console.log(isNaN(undefined));      //bug: returns true
console.log(isNaN(null));
console.log(isNaN('some text'));    //returns true

//bug free
console.log(Number.isNaN(a));
console.log(Number.isNaN(undefined));      
console.log(Number.isNaN(null));
console.log(Number.isNaN('some text'));    



// best check for NaN
function myIsNan(val){
    return val!==val
}

console.log(myIsNan(a));

//all are false
console.log(myIsNan(undefined));
console.log(myIsNan(null));
console.log(myIsNan('some text'));
console.log(myIsNan(Infinity));


