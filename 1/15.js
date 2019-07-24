var foo = "global foo";

function func1() {
    console.log("Inside func1 " + "this.foo = " + this.foo);
}

var obj1 = {
    foo: "obj1 foo",
    method: func1
}

var obj2 = {
    foo: "obj2 foo",
    methd: function(inpObj){
        console.log("Calling methd() of obj2");
        func1.call(inpObj);                     //runs func1() as obj1
    }
}

func1();            //undefined because of strict mode
obj1.method();
func1.call(obj2);               //cals func1() as obj2
obj2.methd(obj1);