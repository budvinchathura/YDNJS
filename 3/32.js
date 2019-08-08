function Foo(num){
    this.id = num;
}

function Bar(num){
    Foo.call(this,num);
    this.id++;

}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.say = function(){
    console.log(this.id);
}

var b1 = new Bar(10);
b1.say();

//following all return true

//checks Bar.prototype and Foo are related
console.log(Bar.prototype instanceof Foo);

console.log(Object.getPrototypeOf(Bar.prototype) === Foo.prototype);

//checks Foo.prortotype is in chain of Bar.prototype
console.log(Foo.prototype.isPrototypeOf(Bar.prototype));

//checka b1 and Foo.prototype are related
console.log(b1 instanceof Foo);

//same here
console.log(b1 instanceof Bar);

//checking __proto__ property
console.log(Object.getPrototypeOf(b1)=== Bar.prototype);

//checks Foo.prototype is in prototype chain of b1
console.log(Foo.prototype.isPrototypeOf(b1));
console.log(Bar.prototype.isPrototypeOf(b1));

//duck typing
if(b1.say){
    b1.say();
}

if(b1.doIt){
    b1.doIt();
}else{
    console.log("no function called doIt");
}

//sometimes duck typing can be harmful

//ex
//.push is availale in arrays 
var someObj = {
    prop:"value",
    push:function(){
        console.log("not the push function in arrays");
    }
}

var array = [1,25];

//not a good check for arrays.push function
if(someObj.push){
    someObj.push("new value");
}

if(someObj instanceof Array){
    someObj.push("new val");
}else{
    console.log("can not push");
}