//delegation

var parent = {
    set: function(name){
        this.name = name;               //"this" is dynamically binded
    },
    print:function(){
        console.log(this.name);
    }
};

var child1 = Object.create(parent);
child1.set2 = function(name,age){
    this.age = age;
    this.set(name);
};

child1.print2 = function(){
    this.print();
    console.log(this.age);
};

var child2 = Object.create(parent);

parent.set("name for parent");
parent.print();
child1.set2("name for child","age for child");
child1.print2();
parent.print();
child1.print();


//parent is exactly the prototype of both child1 and child2
console.log(Object.getPrototypeOf(child1)===parent);            //true
console.log(Object.getPrototypeOf(child2)===parent);            //true



