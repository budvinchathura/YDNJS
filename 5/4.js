// interacting asynchronous calls
const http = require("http");


var a,b;

//one call for printall() would print 'undefined' for either a or b

function func1(resp){
    a = 10;
    printall();
}

function func2(resp){
    b = 30;
    printall();
}

function printall(){
    console.log(`a = ${a} , b = ${b}`);
}

var options = {
    host: "youtube.com",
    method: "GET",
    port: 80
};

var req1 = http.request(options,func1);
var req2 = http.request(options,func2);

req1.end();
req2.end();