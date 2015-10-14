var event = require("events");
var eventEmitter = new event.EventEmitter();
function connect(){
console.log("Connection is Open Now ");
}

function process(){
console.log("Do Processing");
}

function disconnect(){
console.log("Connection is Closed Now ");
}
// Register the Events with the Call back
eventEmitter.on("open",connect);
eventEmitter.on("start",process);
eventEmitter.on("close",disconnect);

// Fire the Events
eventEmitter.emit("open");
eventEmitter.emit("start");
eventEmitter.emit("close");
