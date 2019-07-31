var myobj = {
    a:10
};

console.log(myobj.a);
console.log(myobj["a"]);            //must be converted to a string
// console.log(myobj[a]);              //error

//this is not possible with dot
myobj["complex name !!"] = 9;       //can use complex name with sqr brackets

// console.log(myobj.complex name !!!);        //error
console.log(myobj["complex name !!"]);


var propName = "my property";

myobj[propName] = "hello";
console.log(myobj[propName]);

//all property names are converted to strings

myobj[true] = "some text";
myobj[30] = "thirty";

//both work
console.log(myobj[true]);
console.log(myobj["true"]);

console.log(myobj[30]);
console.log(myobj["30"]);

myobj[null] = "some string";
console.log(myobj[null]);

var obj = {};

myobj[obj] = "another text";
console.log(myobj[obj]);

//computed property names work

var prefix = "my"
myobj[prefix + "x"] = "xxx";    //same as myobj["myx"] = "xxx"
myobj[prefix + prefix + "y"] = "yyy";
console.log(myobj["myx"]);
console.log(myobj["mymyy"]);

console.log(myobj);


