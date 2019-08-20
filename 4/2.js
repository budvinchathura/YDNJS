console.log(typeof 40);
console.log(typeof "40");

//typeof checks whats the type of the value in the variable
const num = 50;
console.log(typeof num);
console.log(typeof typeof num);     //string

var num2;
console.log(typeof num2);           //undefined

var num3 = num2;
console.log(num3);                  //undefined

num2 = num;
console.log(typeof num2);


//"not defined" is different from "undefined"
// console.log(num4);                  //reference error, not defined

//still num5 is undeclared and not defined
//but "typeof" returns undefined
//this is a special safety guard feature
console.log(typeof num5);

//num6 is not still declared

//this method causes reference error
// if(num6){
//     console.log("num6 is decalred");
// }else{
//     console.log("num6 is not defined");
// }


//using typeof is safe
if(typeof num6 !== "undefined"){
    console.log("num6 is declared");
}else{
    console.log("num6 is not decalred or not initialized");
}


//checking the variable as a property in global object is also safe
//not available properties are treated as "undefined"
//they do not throw reference error

if(global.num6){
    console.log("num6 is declared");
}else{
    console.log("num6 is not decalred or not initialized");
}