var myObj = {
    a : 10,
    b: function(){
        return this.a * 2;
    }
};

console.log(myObj.a+" "+myObj.b());


//above can be achieved by using a getter

var myObj2 = {
    a: 10,
    get b(){
        return this.a * 2;
    }
};

console.log(myObj2.a+" "+myObj2.b);

//another getter

Object.defineProperty(myObj2,"c",{
    get: function(){
        return "c getter";
    }
});

console.log(myObj2.c);

myObj2.c = "changed getter c";   //does not affect, "c" is already a getter
console.log(myObj2.c);


//defining both setter and a getter
//need another property to actually store the value

var myObj3 = {
    get a(){
        return this._a_;            //naming convention
    },
    set a(data){
        this._a_ = data * 2;
    }
};
console.log(myObj3.a);      //undefined without calling the setter


myObj3.a = 10;
console.log(myObj3.a);
myObj3._a_ = "external value";      //directly changing interval value
console.log(myObj3.a);

//checking if property exists
var myObj4 = {
    a:"prop a",
    b:"prop b"
};

//"in" checks in higher levels of prototypes as well
console.log("a" in myObj4);         //true
console.log("c" in myObj4);         //false

//or
//hasOwnProperty does not check in higher prototypes
console.log(myObj4.hasOwnProperty("b"));        //true
console.log(myObj4.hasOwnProperty("d"));        //false


var nullObj = Object.create(null);

//this raises an error
//nullObj's proto is null and it does not contain hasOwnPropety() method
// console.log(nullObj.hasOwnProperty("x")); 

//solution
console.log(Object.prototype.hasOwnProperty.call(nullObj,"x"));



