var myobj = {
    a : 0,
    b: 1,
    c : 10
};

//same object, two names

var anothrobj = myobj;

myobj.a ++;
anothrobj.c --;

console.log(myobj.a + " "+myobj.b+" "+myobj.c);
console.log(anothrobj.a + " "+anothrobj.b+" "+anothrobj.c);
console.log(myobj===anothrobj);         //true

myobj.d = -10;
console.log(myobj.d);
console.log(anothrobj.d);


//obj2 is a deep copy
var obj2 = JSON.parse(JSON.stringify(myobj));
console.log(myobj===obj2);          //false
console.log(myobj==obj2);           //false
myobj.d +=999;
obj2.b = "changed to text"

console.log(myobj.a + " "+myobj.b+" "+myobj.c+" "+myobj.d);
console.log(obj2.a + " "+obj2.b+" "+obj2.c+" "+obj2.d);
console.log(myobj===obj2);          //false
console.log(myobj==obj2);           //false

console.log(myobj.a === obj2.a);       //true, both have value = 1

//shallow copy
var obj3 = Object.assign({},myobj);
console.log(obj3 === myobj);            //false
myobj.a++;
console.log(myobj.a + " "+myobj.b+" "+myobj.c+" "+myobj.d);
console.log(obj3.a + " "+obj3.b+" "+obj3.c+" "+obj3.d);

myobj.e = "new e";              //does not affect obj3
console.log(myobj.e);
console.log(obj3.e);            //undefined


myobj.f = ["hello","world"];
//array is not deeply copied
var obj4 = Object.assign({},myobj);
console.log(myobj.f+ "   "+obj4.f);
myobj.f[2] = "!!!";             //affects both
obj4.f[1] = "john";             //affects both
console.log(myobj.f+ "   "+obj4.f);



