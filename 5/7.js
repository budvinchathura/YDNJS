

p = new Promise(function(){
    console.log('resolve function')
});
console.log(typeof p);
console.log(p instanceof Promise);
console.log(p instanceof Object);
console.log(p instanceof Function);
console.log(typeof p.then);


//duck typing to check whether an object is a promise
function isAPromise(obj){
    if(
        obj!==null &&
        (
            typeof obj === 'object' ||
            typeof obj === 'function'
        ) &&
        typeof obj.then === 'function'
    ){
        return true;
    }else{
        return false;
    }
}

var a = new Promise(()=>{});
var b = {then:function(){
    console.log('not the "then" function of a promise')
}};

//both will return true
//but b is not a promise!!
console.log(isAPromise(a));
console.log(isAPromise(b));

//in the same way 
//in some implementations
//libraries or frameworks will use their own Promises 
//rather than ES6 promise implementaton