//always resolving promise
var p = new Promise(function(resolve,reject){
    resolve();
});

//always a,b,c is printed in order

p.then(function(){
    p.then(function(){
        console.log('c');
    });
    console.log('a');
});
p.then(function(){
    console.log('b');
});