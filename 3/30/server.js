const http_ = require("http");
const url_ = require("url");

var server = new http_.Server();

server.on("request",(req,resp)=>{
    console.log("new request");
    resp.write("response from server");
    resp.end();
});

server.listen(80,"localhost");