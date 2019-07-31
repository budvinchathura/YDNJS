var obj1 = {
    a : 2
};

var obj2 = Object.create(obj1);

console.log(obj2.a);            //prints "a" of obj1
console.log("a" in obj2);       //true, finds "a" in prototype chain
console.log(obj2.hasOwnProperty("a"));      //false, obj2 itself does not has its own "a"
