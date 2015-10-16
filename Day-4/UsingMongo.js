var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/amit');

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
    "name":"Amit",
    "id":1009,
    "city":"Delhi"
}
/*
User.create(data,function(error,response){
   if(error){
       console.log("Error",error);
   }
    else{
       console.log("Response ",response);
   }
});*/

User.findOne({"id":1009},function(error,response){
if(response){
    console.log("Found ",response);
}
else{
    console.log("Not Found...");
}

});