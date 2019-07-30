function func1(){
    console.log(this.a);        //"this" depends on call site
}

var obj1 = {
    a:100,
    op:func1
};

var obj2 = {
    a:-7,
    child:obj1,
    op:func1
}

global.a = "oops global!";

func1();                //9
obj1.op();              //100
obj2.op();              //oops global
obj2.child.op()         //100


var operation = obj1.op;
operation();            //oops global     //function is called from global scope

function doFunc(fn){
    var a = 999;
    fn();
}

//all prints global value
doFunc(func1);
doFunc(obj1.op);
doFunc(obj2.op);

setTimeout(func1,100);      //nodejs prints "undefined"
//in nodejs "this" does not resolve to global objects in timeouts

setTimeout(func1.bind(global),250);     //works, oops global
setTimeout(func1.bind(obj1),300);       //works, prints 100
setTimeout(()=>{
    func1();
},400);                         //arrow function use lexical "this", prints global