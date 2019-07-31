var myobject = {};

Object.defineProperty(myobject,"a",{
    value : 10,
    enumerable:true
});

//property b is not enumerable
Object.defineProperty(myobject,"b",{
    value : 20,
    enumerable:false
});

Object.defineProperty(myobject,"c",{
    value : 30,
    enumerable:true
});

console.log(myobject.a +" "+myobject.b+" "+myobject.c);         //ok, prints everything
console.log(("a" in myobject)+" "+("b" in myobject)+" "+("c" in myobject));     //all true
console.log((myobject.hasOwnProperty("a"))+" "+(myobject.hasOwnProperty("b"))+" "+(myobject.hasOwnProperty("c")));
console.log((myobject.propertyIsEnumerable("a"))+" "+(myobject.propertyIsEnumerable("b"))+" "+(myobject.propertyIsEnumerable("c")));    //b-false

console.log(Object.keys(myobject));         //does not contain b
console.log(Object.getOwnPropertyNames(myobject));

//"b" is not considered in iteration
//iteration order is not consistent !!!
for(var key in myobject){
    console.log(key+" = "+myobject[key]);
}

var myArray = ["p","q","r","s","t"];

//iterating by values

//1.for
//upto the end
for(var val of myArray){
    console.log(val);
}

//2.forEach
//accepts callback function
//iterates upto end
console.log("forEach");
myArray.forEach(element => {
    console.log(element);
});

//3.every
//accepts callback
//iteartes untill callback returns false
console.log("every");
myArray.every(element=>{
    console.log(element);
    return element !== "s"
});

//3.some
//accepts callback
//iteartes untill callback returns true
console.log("some");
myArray.some(element=>{
    console.log(element);
    return element == "r"
});


