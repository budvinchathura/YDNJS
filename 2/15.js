function func1(){
    console.log(a);
}

function func2(){
    var a = 3;
    func1();
}

var a = 10;

func2();                //prints 10, func1 has scope for global,does not have dynamic scope inside func2
