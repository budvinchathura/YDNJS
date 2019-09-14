//swallowing errors
var p = new Promise(function(resolve,reject){
    myobj.action();        //error here
    resolve('hi');
});

function func1(msg){
    console.log('msg received: '+msg);
}

function func2(err){
    console.log('error occured');
    console.log(err);
}

p.then(func1,func2);            //func2 is executed because of error






var p2 = new Promise(function(resolve,reject){    
    resolve('hi');
    myobj.action();        //this error is not caught because it is after resolve()
});

p2.then(func1,func2);





//when the error is inside the callback
//this error can be caught by the .catch

var p3 = new Promise(function (resolve,reject) {
    resolve('hello');
});

function func3(msg){
    msg = msg + myobj2.name
    console.log('message = '+msg);
}

p3.then(func3).catch(func2);


