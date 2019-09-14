var s = new String('my string');
console.log(s);                 //prints as object
console.log(s.toString());
console.log(typeof s);    //object
console.log(s instanceof String);

//reveals internel Class property
console.log(Object.prototype.toString.call(s));

var arr = [1,2,3]
console.log(Object.prototype.toString.call(arr));

var reg = new RegExp('\\w+');
console.log(Object.prototype.toString.call(reg));

console.log(Object.prototype.toString.call(null));          // [object Null]
console.log(Object.prototype.toString.call(undefined));     // [object Undefined]

//boxing wrappers
// automatically by relevent object wrappers
console.log(Object.prototype.toString.call('some text'));
console.log(Object.prototype.toString.call(4433));

//boxing automaticlly happens for primitive values
var myvar = 'abc'
console.log(typeof myvar);          //string
console.log(myvar instanceof String);       //false

// still myvar is a primitive value
// it does not have functions of a String object

//but boxing happens when those functions are called
console.log(myvar.length);


//sometimes boxing can be confusing

var boolvar = new Boolean(false);
//this is false because 'Object' is not a falsy value
console.log(boolvar === false);
if(!boolvar){
    //this block never executes
    console.log('text');
}



//use .valueOf() to unbox
console.log(boolvar.valueOf() === false);      //true :)
if(!boolvar.valueOf()){
    console.log("this block executes");
}


//implicit unboxing also happens

var a = new String("mytext");
var b = a + " new";
console.log(b);
console.log(typeof a);      //Object
console.log(typeof b);      //string

