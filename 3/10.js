function func1(){
    //self = this is implied
    return ()=>{
        //"this" is lexically inherited from func1
        console.log(this.a);
    };
}

var obj1 = {
    a:"obj1 a"
};

var obj2 = {
    a:"obj2 a"
};

var myFuncObj1 = func1.call(obj1);          //"this" is obj1
myFuncObj1.call(obj2);          //obj1 a

var myFuncObj2 = func1.call(obj2);
setTimeout(myFuncObj2,1000);            //obj2 a, myFuncObj2 s this is binded to object2
