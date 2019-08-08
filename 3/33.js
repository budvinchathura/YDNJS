//es6 class

class C{
    constructor(number){
        this.num = number;
    }

    say(){
        console.log("my number is "+this.num);
    }
}

var c1 = new C(25);
c1.say();       //25

//this change afftects both c1 and c2
//class mechanism is just a wrapper around live-delegation
C.prototype.say = function(){
    console.log("number = "+this.num*1000);
};

var c2 = new C(25);
c2.say();           //25000
c1.say();           //25000


