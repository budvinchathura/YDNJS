function myfunc() {
    return 50;    
}

console.log(typeof myfunc);         //returns "function"
console.log(typeof myfunc());       //return "number" because return value of myfunc() is a number

function func2(x){
    if(x>0){
        return true;
    }else{
        return 10;
    }
}

console.log(typeof func2(10));         //"boolean"
console.log(typeof func2(-20));         //"number"

function func3(i,j){
    return i+j;
}

func3.property = "additional property"

console.log(func3);
console.log(func3["property"]);
console.log(func3.property);

var a = "hello world";
a.toUpperCase();                    //does not change "a"
console.log(a.toUpperCase());
console.log(a);
console.log(a.length);
console.log(a.charAt(0));
console.log("world".toUpperCase());