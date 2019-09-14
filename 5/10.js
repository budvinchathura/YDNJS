//resolved or rejected only once
var p = new Promise(function(resolve,reject){
    //only the first one is considered
    //others are neglected
    
    resolve(40);
    reject(30);
    resolve(23);
});

function func1(val){
    console.log('success, received: '+val);
}

function func2(val){
    console.log('err: '+val);
}

p.then(func1,func2);