const http = require('http');

http.createServer(function(req, res){
    console.log("Hello World from server!");
    console.log(req.url)
}).listen('8080');