var a = 10;
console.log("Before calling func1() a="+a);
func1();
console.log("After calling func1() a="+a);
console.log("\n");

function func1(){
    var a = 100;
    console.log("Inside func1() a="+a);
}

var b = 99;
console.log("Before calling func2() b="+b);
func2();
console.log("After calling func2() b="+b);
console.log("\n");

function func2(){
    b = 999;                                //changes global "b"
    console.log("Inside func2() b="+b);
}

var c = -5;
console.log("Before calling func3() c="+c);
func3();
console.log("After calling func3() c="+c);
console.log("\n");

function func3(){
    c = -20;                            //changes global c
    console.log("Inside func3() c="+c);
    var c;                                  //local "c" is set and global "c" is detached, global "c" is unchanged, hoisted to the top of func3()
    console.log(c);
}

