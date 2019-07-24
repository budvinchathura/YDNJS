//these are identical
//both are global
var a = 10;
let b = 20;

console.log("Global scope\na=" + a + "\nb=" + b + "\n");

{
    var c = 30;
    let d = 40;                             //"d" is only available inside this block
    console.log("Local scope\na=" + a
        + "\nb=" + b
        + "\nc=" + c
        + "\nd=" + d
        + "\n");
}

// console.log("Again global scope\na=" + a
//     + "\nb=" + b
//     + "\nc=" + c
//     + "\nd=" + d                        //raises error, "d" is not available outside the block
//     + "\n");

console.log("Local scope\na=" + a
    + "\nb=" + b
    + "\nc=" + c
    + "\n");


function func1() {
    //both are identical
    var e = 1;
    let f = 2;
    if (e > 0) {
        var g = 10;
        let h = 11;
    }
    // console.log("g=" + g + " h=" + h);      //error, "h" is not available here
    {
        var i = 0;
        let j = 10;
    }
    console.log("i=" + i + " j=" + j);      //error, j is not available here
}

func1();





