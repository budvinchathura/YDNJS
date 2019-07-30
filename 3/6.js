function func1(){
    console.log(this.a);
}

var obj1 = {
    a: "obj1 a"
};

var obj2 = {
    a: "obj2 a"
};

global.a = "global a";

func1();                //global
func1.call(obj1);       //obj1 a
func1.call(global);     //global

//hard binding obj1
var func2 = function(){
    func1.call(obj1);
}

func2();            //obj1 a
func2.call(obj2);   //still obj1 a, because of hard binding
// setTimeout(func2,200);      //hard binding still works

//----------------------------------------------------
console.log("-----------------------------------------------");
//hard binding in ES5

function func3(data){
    console.log(this.a,data);
}

var obj3 = {
    a : "obj3 a"
};

var bindedFunc = func3.bind(obj3);      //permanent binding

bindedFunc(10);


console.log("-----------------------------------------------");
//"context" paramater

function func4(el){
    console.log(el,this.id);
}

var obj4 = {
    id: "awesome"
};
//builtIn forEach function get a second optional parameter to
//be used as "this" context
[1,2,3].forEach(func4,obj4);

