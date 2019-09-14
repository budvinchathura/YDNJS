const http = require("http");
var options = {
    host: "google.lk",
    method: "GET",
    port: 80
};

function func1(resp){
    console.log(a);         //printed value is sometimes unpredictable
}

var a = 0;



var req1 = http.request(options,func1);
req1.end();
a++;
a++;
a++;
a++;