function func1(){
    console.log(this.a);
}

global.a = "global a";

var obj1 = {
    a:"obj1 a",
    op:func1
};

var obj2 = {
    a:"obj2 a",
    op:func1
};

//implicit binding
obj1.op();      //obj1 a
obj2.op();      //obj2 a


//explicit binding overrides implicit binding
obj1.op.call(obj2);
obj2.op.call(obj1);
