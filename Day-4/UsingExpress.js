var express=require("express");
var bodyparser = require("body-parser");
var app= express();
app.use(bodyparser());
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/amit');
app.use(express.static(__dirname+"/"));
app.get("*",function(req,res){
return res.sendFile(__dirname+"/index.html");
});
app.post("/login",function(req,res){
console.log("request body ",req.body);
var userObject = req.body;

    var userSchema=new Schema({
        "name":String,
        "id":{
            "type":String,
            "unique":true
        },
        "city":String
    });

    var User =mongoose.model('users',userSchema);
    var data={
        "name":userObject.name,
        "id":userObject.id,
        "city":userObject.city
    }

     User.create(data,function(error,response){
     if(error){
     console.log("Error",error);
         res.json({"status":"Error During Add..."});
     }
     else{
     console.log("Response ",response);
         res.json({"status":"Record Added..."});
     }
     });

    res.json({"status":"Record Added..."});
});
app.listen(9999,function(){
console.log("Server Start....");
});
