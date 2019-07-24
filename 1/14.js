"use strict"

function makeAdder(x) {
    function add(y) {
        return (x + y);
    }

    //returns inner function whose x is set to the given parameter to makeAdder function
    //just like memorizing x value
    //this scenario is called as "closure"
    //function add() has a "closure" over "x"
    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log("plusOne(7) = " + plusOne(7));
console.log("plusTen(30) = " + plusTen(30));

//User is a function, not a class
//acts as a Module
function User(dpname) {
    let username, password;

    function doLogin(user, pw) {
        //doLogin function has closure for varibles of User() function
        username = user;
        password = pw;
        console.log("Login for " + dpname + " successful");
    }
    let publicAPI = {
        login: doLogin
    };
    return publicAPI;
}

var fred = User("freddy");
fred.login("111", "xxx");
var fb = User("Foo Bar");
fb.login("000", "9");

function outerFunc(x){
    function innerFunc(){
        console.log("This is the inner function");
    }

    if(x===true){
        return innerFunc;
    }else{
        return "mytext"
    }
}

var myvar = outerFunc(true);
var myvar2 = outerFunc(false);

console.log("myvar = "+myvar);
console.log("myvar2 = "+myvar2);

console.log("myvar() = "+ myvar());
console.log("myvar2() = "+ myvar2());           //error myvar2 is not a function
