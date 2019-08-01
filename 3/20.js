var obj1 = {
    a : 2
};

var obj2 = Object.create(obj1);

console.log(obj2.a);            //prints "a" of obj1
console.log("a" in obj2);       //true, finds "a" in prototype chain
console.log(obj2.hasOwnProperty("a"));      //false, obj2 itself does not has its own "a"

obj1.b = 100;               //added to obj1, accessible from obj2
console.log(obj1.b);
console.log(obj2.b);

obj2.c = 99;                //only added to obj2
console.log(obj1.c);            //undefined
console.log(obj2.c);

//now "b" is present in obj1
//but "b" in obj1 is shadowed and "b" is added to obj2
//thus "b" in obj1 is unchanged
obj2.b = "new b";
console.log(obj1.b);        //100
console.log(obj2.b);        //new b

//add a writable false attribute "d" to obj1
//obj2 itself does not have "d"
Object.defineProperty(obj1,"d",{
    value : "unchangable value",
    writable:false
});

obj2.d = "new value for d";         //no effect, error in strict mode
console.log(obj1.d);
console.log(obj2.d);

//if there is a setter in the chain of the relevent name
//that setter is called always



//implicit shadowing can also occur
obj3 = {
    x:20
}

obj4 = Object.create(obj3);

console.log(obj3.x);        //20
console.log(obj4.x);        //20

//creates new "x" for obj4
//"x" of obj3 is unchanged
obj4.x++;       //acts as obj4.x = obj4.x + 1

console.log(obj3.x);        //20
console.log(obj4.x);        //21






