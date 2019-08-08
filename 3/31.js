//instanceof

function Foo(){
    this.x = 10;
}

Foo.prototype.doX = function(){
    console.log(this.x);
};

var a1 = new Foo();


//checks a1 and Foo.prototype are related
if (a1 instanceof Foo){
    a1.doX();
}