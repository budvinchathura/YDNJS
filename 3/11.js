console.log("strings....");
var strPrimitive = "This is a primitive string";
console.log(typeof strPrimitive);
console.log(strPrimitive instanceof String);
console.log(strPrimitive instanceof Object);

var strObject = new String("This is a string object");
console.log(typeof strObject);
console.log(strObject instanceof String);
console.log(strObject instanceof Object);

//string object is required to access operations
console.log(strObject.length);

//JS automatically coerces primitive string to string object
console.log(strPrimitive.length);

console.log("-".repeat(20));
//-----------------------------------------
console.log("Numbers...");
var numPrimitive = 50;
console.log(typeof numPrimitive);
console.log(numPrimitive instanceof Number);
console.log(numPrimitive instanceof Object);

var numObject = new Number(100);
console.log(typeof numObject);
console.log(numObject instanceof Number);
console.log(numObject instanceof Object);

console.log("-".repeat(20));
//----------------------------------------
console.log("Boolean...");
var boolPrim = true;
console.log(typeof boolPrim);
console.log(boolPrim instanceof Boolean);
console.log(boolPrim instanceof Object);

var boolObj = new Boolean(false);
console.log(typeof boolObj);
console.log(boolObj instanceof Boolean);
console.log(boolObj instanceof Object);

console.log("-".repeat(20));
//--------------------------------------
console.log("Objects...");
//no difference
var obj1 = {};
console.log(typeof obj1);
console.log(obj1 instanceof Object);

var obj2 = new Object();
console.log(typeof obj2);
console.log(obj2 instanceof Object);

console.log("-".repeat(20));
//--------------------------------------
console.log("Null...");
var nullPrim = null;
console.log(typeof nullPrim);                   //type is "object" - this is a bug
// console.log(nullPrim instanceof null);      //invalid, no object as "null"
console.log(nullPrim instanceof Object);        //false

// var nullObj = new null();                       //invalid

console.log("-".repeat(20));
//--------------------------------------
console.log("Undefined...");
var undfPrim = undefined;
console.log(typeof undefined);          //undefined
// console.log(undfPrim instanceof undefined);      //invalid
console.log(undfPrim instanceof Object);        //false

// var undfObj = new undefined();                  //invalid

console.log("-".repeat(20));
//--------------------------------------
console.log("Function...")

//no difference

var primFunc = function(){};
console.log(typeof primFunc);               //function
console.log(primFunc instanceof Function);      //true
console.log(primFunc instanceof Object);      //true

var objFunc = new Function(()=>{});
console.log(typeof objFunc);                //function
console.log(objFunc instanceof Function);   //true
console.log(objFunc instanceof Object);   //true


console.log("-".repeat(20));
//--------------------------------------
console.log("Array...")
//no difference
var primArray = [];
console.log(typeof primArray);              //object
console.log(primArray instanceof Array);    //true
console.log(primArray instanceof Object);    //true

var objArray = new Array();
console.log(typeof objArray);               //object
console.log(objArray instanceof Array);     //true
console.log(objArray instanceof Object);     //true

console.log("-".repeat(20));
//--------------------------------------
console.log("Date...");

var objDate = new Date();
console.log(typeof objDate);
console.log(objDate instanceof Date);
console.log(objDate instanceof Object);

//same for RegExp and Error