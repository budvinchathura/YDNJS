// run to completion

const http = require("http");
var a = 20;

function op1(){
    a+=1;
    a+=2;
    a+=3;
}

function op2(){
    a*=2;
    a*=3;
    a*=4;
}

function printa(){
    console.log(a);
}

var options = {
    host: "google.lk",
    method: "GET",
    port: 80
};

var req1 = http.request(options,op1);
var req2 = http.request(options,op2);

req1.end();
req2.end();

//can not predict whether 624 or 484
//but both asynchronous functions are atomic
//only possible outcomes are 624 and 484
setTimeout(printa,1000);        
