var fs = require("fs");
var readStream = fs.createReadStream("Test.txt");
var writeStream = fs.createWriteStream("Test2.txt");
readStream.pipe(writeStream);
console.log("Write Done");
/*
var data = "";
var readCount = 1;
readStream.on("data",function(chunk){
data = data + chunk;
writeStream.write(chunk);
console.log("reading ",readCount);
readCount++;
//console.log("Chunk "+chunk);
});

readStream.on("end",function(){
console.log("Reading is Done ");
});
*/