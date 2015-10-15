var http = require("http");
var fs = require("fs");
var path= require("path");
var qs = require("querystring");
var usermodule = require("./UserOperations.js");
var server = http.createServer(function(request,response){
var method = request.method;
var url = request.url;
    if(method==="GET" && url==="/"){
        response.writeHead(200,{"Content-Type":"text/html"});
        //var newPath = path.normalize(__dirname+"/..");
        var joinPath = path.join(__dirname,'/pages/index.html');
        console.log("Complete Path ",joinPath);
        response.end(fs.readFileSync(joinPath));
    }
    else
    if(method==="POST" && url==="/login"){
        var reqData = null; // Store the Post Request Data
        var bodyData = '';
        request.on("data",function(chunk){
            bodyData = bodyData +chunk;
        });
        request.on("end",function(){
            reqData = qs.parse(bodyData);
            console.log("Request Data ",reqData+" "+request.url);
            console.log(" Type of ",typeof  reqData);

        console.log("After End ",request.url);
        if(reqData){
            var result = usermodule.checkLogin(reqData.userid,reqData.pwd);
            response.writeHead(200,{"Content-Type":"text/html"});
            if(result){
                var joinPath = path.join(__dirname,'/pages/welcome.html');
                console.log("Complete Path ",joinPath);
                response.end(fs.readFileSync(joinPath));
            }
            else{
                console.log("Inside Else ");
                var joinPath = path.join(__dirname,'/pages/invalid.html');
                console.log("Complete Path ",joinPath);
                response.end(fs.readFileSync(joinPath));
            }
        }
        });
    }

    else{
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end("Some thing Else Request ")
    }
});

server.listen(3232,function(){
    console.log("Server Start ....");
})