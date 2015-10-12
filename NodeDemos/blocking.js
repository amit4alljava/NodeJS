var fileSystem = require("fs");
var contents = fileSystem.readFileSync("NodeJS.txt");
console.log("After Reading this File ");
console.log(contents);
console.log("Now I am Doing some thing else");
a = 100;
b = 200;
c = a + b;
console.log("sum is ",c);