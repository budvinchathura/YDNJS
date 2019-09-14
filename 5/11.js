//passing multiple  values

var p = new Promise(function(resolve,reject){
    //only the first parameter is passed
    resolve(10,20,30);
});

function func1(a,b,c){
    console.log(a,b,c);
    
}

p.then(func1);  //prints:    10 undefined undefined




//have to wrap them in another object or array

var p2 = new Promise(function(resolve,reject){
    resolve([10,20,30]);
});

function func2(arr){
    console.log(arr[0],arr[1],arr[2]);
}

p2.then(func2);     //    prints: 10 20 30    