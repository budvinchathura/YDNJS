//class vs delegation

//class

function foo1(who){
    this.me = who;
}

foo1.prototype.identify = function(){
    return("I am "+ this.me);
};

function bar1(who){
    foo1.call(this,who);
}

bar1.prototype = Object.create(foo1.prototype);

console.log(bar1.prototype.constructor === foo1);       //true

bar1.prototype.speak = function(){
    console.log("Hello, "+this.identify()+".");
};

var b1 = new bar1("b1");
var b2 = new bar1("b2");

b1.speak();
b2.speak();



//delegation
var foo2 = {
    init:function(who){
        this.me = who;                  //dynamic binding of "this" mimics class behaviour
    },
    identify:function(){
        return("I am "+ this.me);
    }
};

var bar2 = Object.create(foo2);

bar2.speak = function(){
    console.log("Hello, "+this.identify()+".");
};


var b3 = Object.create(bar2);
var b4 = Object.create(bar2);
b3.init("b3");
b4.init("b4");

b3.speak();
b4.speak();

