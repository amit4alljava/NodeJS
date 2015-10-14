var fs = require("fs");
var path = require("path");
// Stat of the File/Dir U Specified
fs.stat(__filename,function(err,stat){
console.log("Is File ",stat.isFile());
console.log("Is Dir ",stat.isDirectory());
console.log("Is Blocked Device ",stat.isBlockDevice());
//console.log(stat);
});

//readdir is used to scan the FileSystem
var newPath = path.normalize(__dirname+"/..");
fs.readdir(newPath,function(error,files){
console.log("Files ",files);
});

// Write a File
var data = "This is the Content I Want to Store in a File ";
fs.writeFile("Test.txt",data,function(error){
if(error){
console.log("Error During Writing in a File ",error);
}
else
{
console.log("File Stored...");
}
});
