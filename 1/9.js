var globalVar = 100;

function func1() {
    var a = 1;
    console.log("Inside func1\t\ta=" + a);
    func2();
    // func3();                    //not defined

    function func2() {
        var b = 2;
        console.log("Inside func2\t\ta=" + a + " b=" + b);
        func3();

        function func3() {
            var c = 3;
            console.log("Inside func3\t\ta=" + a + " b=" + b+ " c=" + c);

        }
    }
}

// func2();                //not defined
var x = func1;
x();                    //runs func1()
console.log(x["a"]);        //"undefined"