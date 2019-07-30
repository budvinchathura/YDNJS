//const is just like let, 
//except const variables can not be changed
//const variable should be initialized

{

    let a = 10;
    // const b;            //not permitted
    const b = 20;
    a++;
    // b++;                    //not permitted
    console.log("inside block  a = "+a+"  b = "+b);
    var c = 500;
}
console.log("outside block c = "+c);        //ok
console.log("outside block b = "+b);        //reference error