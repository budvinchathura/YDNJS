//super() is static

class P{
    foo(){
        console.log("inside P.foo");
    }
}

class C extends P{
    foo(){
        super.foo();
    }
}

var c1 = new C();
c1.foo();           


var D = {
    foo:function(){
        console.log("inside D.foo");
    }
};

var E = {
    //just another reference 
    foo: C.prototype.foo
};

//D is the prototype of E
Object.setPrototypeOf(E,D);

E.foo();
//prints P.foo
//because E.foo is just another reference to C.prototype.foo
//in that function super() is statically binded to parent of C, which is P


////.toMethod is not available now

// //if we want to run D.foo from E
// //we can use .toMethod
// ///.toMethod copies the function and assigns to new object

// var D2 = {
//     foo:function(){
//         console.log("inside D2.foo");
//     }
// };

// var E2 = Object.create(D2);

// E2.foo = C.prototype.foo.toMethod(E2);
// E2.foo();

