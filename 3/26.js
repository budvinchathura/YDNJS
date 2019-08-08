//creating links

var a = {
    do:function(){
        console.log("do function");
    }
};

a.do();

var b = Object.create(a);
b.do();

//adding property to a
//b also can access it
a.do2 = function(){
    console.log("do2 function");
};

a.do2();
b.do2();

//editing property in b
//does not change do2 in a
b.do2 = function(){
    console.log("do2 in b");
};

a.do2();        //unchanged
b.do2();

//adding a property to b
//a does not have access to this property
b.do3 = function(){
    console.log("do3 in b");
};
b.do3();
// a.do3();            //eror




//adding new properties as well


//this wont work
// var c = Object.create(a,{
//     doOther:function(){
//         console.log("do other");
//     }
// });

//this will work
//property full descriptors needed
var c = Object.create(a,{
    doOther:{
        value:function(){
            console.log("do other")
        }
    }
});

c.doOther();


//"a" also has a "do" function
//here our new do function is added to "d"
var d = Object.create(a,{
    do:{
        value:function(){
            console.log("new do2");
        }
    }
});

d.do();


//mixin in possible with two classes
//acts like multiple inheritence

var some = {
    a:function(){
        console.log("a in some");
    },
    b:function(){
        console.log("b in some")
    }
};

//this wont work
//second object needs to have property decriptors
// var other = {
//     b:function(){
//         console.log("b in other");
//     },
//     c:function(){
//         console.log("c in other");
//     }
// };

var other = {
    b:{
        value:function(){
            console.log("b in other");
        }
    },
    c:{
        value:function(){
            console.log("c in other");
        }
    }
};

//if there are common properties, second is taken
var mixedObj = Object.create(some,other);
mixedObj.a();
mixedObj.b();
mixedObj.c();












