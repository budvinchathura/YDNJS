//both ways are same
var obj1 = new Object();
obj1.prop1 = '123';

//this method is preffered
var obj2 = {
    prop1:'123'
};

console.log(obj1);
console.log(obj2);


//all 3 methods produce same outcome

var func1 = function(a,b){
    var c = a+b;
    return c;
}

function func2(a,b){
    var c = a+b;
    return c
}

//this method is rarely used
//used when function body has to be defined dynamically
//low perfermance, like in eval()
var func3 = new Function('a','b','var c = a+b;return c');


console.log(func1(2,3));
console.log(func2(2,3));
console.log(func3(2,3));

//both methods produce regExp object
var reg1 = new RegExp('^a*b+','g');     //useful when creating the pattern dynamically
var reg2 = /^a*b+/g;        //this method is preffered for performance
console.log(reg1);
console.log(reg2);


var dateObj = new Date();
var dateStr = Date();
console.log(dateObj);
console.log(dateStr);
console.log(dateObj.getTime());         //unix time in seconds




//errors

// throw new Error("error msg");


// var err1 = new Error("my error 1");
// throw err1;


// var refErr = new ReferenceError("custom ref error");
// throw refErr;


// throw new Error();



//symbols - simple scalar primitives
// do not use 'new' keyword
var mysym = Symbol("123");
// both prints same value
console.log(mysym);
console.log(mysym.toString());
console.log(typeof mysym);          //symbol
console.log(mysym instanceof Object);       //false
console.log(mysym instanceof Symbol);       //false

var obj = {};
// symbol can be used as a property
obj[mysym] = 'sometext';
console.log(obj[mysym]);

console.log(Symbol('abc') === Symbol('abc'));

