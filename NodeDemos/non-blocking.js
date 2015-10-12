var fileSystem = require("fs");
fileSystem.readFile("NodeJS.txt",function(error,content){   
console.log("File Content Read Done...");   
console.log(content.toString());
});
console.log("Now I do SomeThing else");
a = 100;
b = 200;
c = a + b;
console.log("Sum ",c);
