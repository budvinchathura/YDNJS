function func1() {
    console.log(this.a);
}

global.a = "global a";

var obj1 = {
    a: "obj1 a",
    op: func1
};

var obj2 = {
    a: "obj2 a",
    op: func1
};

//implicit binding
obj1.op();      //obj1 a
obj2.op();      //obj2 a


//explicit binding overrides implicit binding
obj1.op.call(obj2);     //obj2 a
obj2.op.call(obj1);     //obj1 a

console.log("--------------------------------------------");

var obj3 = {
    a: "obj3 a",
    op: func2
};

function func2(data) {
    this.a = data;
}

//this syntax is invalid
// var cpy = new func2("new data").call(obj3);

//"new" has precendence over implicit binding
var cpy = new obj3.op("new data");        //changes cpy object. obj3 is unchanged
console.log(obj3.a);            //obj3 a
console.log(cpy.a);             //new data

console.log("--------------------------------------------");

var obj4 = {};

function func4(data) {
    this.a = data;
}

//explicit binding
var func4cpy = func4.bind(obj4);
func4cpy("first");                  //changes obj4
console.log(obj4.a);                //prints "first"

//"new" overrides previous explicit binding
var cp1 = new func4cpy("second");       //changes are applied to cpy1 object, obj4 is unchanged
console.log(obj4.a);                //prints "first"
console.log(cp1.a);                 //prints second




