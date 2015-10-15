var http = require("http");
var server = http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/plain"});
var method = request.method;
var url = request.url;
if(method==="GET" && url==="/"){
response.end("Hello Client ");
}
else{
response.end("Hey this is a New Request ");
}
});
server.listen(9997,function(){
console.log("Server Start and listen on Port 9997.....");
});