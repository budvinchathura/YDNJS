//observe call stack
function func1(){
    console.log("inside func1");
    func2();
}

function func2(){
    console.log("inside func2");
    func3();
}

function func3(){
    console.log("inside func3");

}

func1();