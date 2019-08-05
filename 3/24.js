function Foo(name){
    this.name = name;
}

Foo.prototype.getName = function(){
    return this.name;
};

function Bar(name,label){
    Foo.call(this,name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype = Foo.prototype does not work in this way
// it only adds another reference

Bar.prototype.getLabel = function(){
    return this.label;
};

var a = new Bar("name for a","label for a");

console.log(a.getName());
console.log(a.getLabel());

//false, we previously created Bar.prototype from Foo.prototype
console.log(Bar.prototype.constructor === Bar);     
console.log(Bar.prototype.constructor === Foo);

var b = new Foo("name for b");
console.log(b.getName());           //ok, foo.prototype has getName
// console.log(b.getLabel());          //error,foo.prototype does not have getLabel




