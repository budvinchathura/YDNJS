// nondeterministic
const http = require("http");
var a = 20;

function inc(){
    a++;
}

function mul(){
    a*=5;
}

function printa(){
    console.log(a);
}

var options = {
    host: "google.lk",
    method: "GET",
    port: 80
};

var req1 = http.request(options,inc);
var req2 = http.request(options,mul);

req1.end();
req2.end();

setTimeout(printa,1000);        //can not predict output, can be either 101 or 105
