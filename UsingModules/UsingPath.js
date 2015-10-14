var path = require("path");
var fs = require("fs");
console.log("Current Dir Path ",__dirname);
console.log("Current File Path",__filename);
var newPath = path.normalize(__dirname+"/..");
console.log("New Path is ",newPath);
var joinPath = path.join(newPath,'/Files/Sample.txt');
console.log("Join Path ",joinPath);
console.log("Path DirName ",path.dirname(__filename));
console.log("Path DirName ",path.dirname(joinPath));
console.log("Get the File Name Only From Path ",path.basename(joinPath));
console.log("Get the File Name Only From Path and remove the extension ",path.basename(joinPath,'ple.txt'));
console.log("Seperator ",path.sep);
console.log("Deli ",path.delimiter);
var object = path.parse(joinPath);
console.log("Object is ",object);
console.log(typeof object);
var path1 = path.format(object);
console.log("Object Convert into Path ",path1);
fs.readFile(joinPath,function(error,content){
if(error){
console.log("Error During Reading a File ");
}
else
{
	console.log("Content is "+content);
}
});
