// FOR LOOP 
var http = require('http');

var num = 10;
for (var i=0;i<=num;i++)
{
    console.log(i);
}
http.createServer(function(req, res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("Hello at live Server");
}).listen(3000);


console.log("server Started at http://127.0.0.1:3000");