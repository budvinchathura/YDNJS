//handling a promise when it is never fulfilled or rejected

//promise
var time_consuming = new Promise(function(resolve,reject){
    setTimeout(resolve,500,'hello')
});


//short time promise to stop waiting
var short_time = new Promise(function(resolve,reject){
    setTimeout(reject,2000,'timeout!!!');
});

//returns the first promised to be resolved
Promise.race([time_consuming,short_time]).then(
    function(msg){
        console.log('msg from time consuming promise: '+ msg);
    },
    function(err){
        console.log(err);
    }
)