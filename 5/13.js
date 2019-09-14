//sometimes we can not trust whether an object is a promise

//p1 is 'thenable' but it is not a genuine promise
var p1 = {
    then: function(cb){
        cb(30);
    }
};

function func1(val){
    console.log('success ' + val);
}

function func2(err){
    console.log('error occured ' + err);
}

p1.then(func1);       //somehow it runs func1




//another scenario

var p2 = {
    then: function(cb,errcb){
        cb(50);
        errcb('something');
    }
};

p2.then(func1,func2);       //runs both func1 and func2





//Promise.resolve can be used to filter these things
//Promise.resolve always returns a promise

function doTask(val){
    console.log('inside do task: '+val);
    return 'task finished';
}

Promise.resolve(doTask(50)).then(func1);


//another one

var p3 = {
    then: function(cb){
        console.log('executing');
        myobj.action();         //error is handled by func2
        cb(300);
    }
};

Promise.resolve(p3).then(func1,func2);






