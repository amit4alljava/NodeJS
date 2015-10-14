var event = require("events");
var eventEmitter= new event.EventEmitter();

function myCallBack(value){
console.log("My Event is Trigger.... ",value);
}
function myCallBack2(){
console.log("Another Event is Trigger ");
}
// This is the Event Defination (10 Times)
eventEmitter.setMaxListeners(20);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
eventEmitter.on("myevent",myCallBack);
//eventEmitter.on("myevent",myCallBack2);
// Here is Trigger the Event
eventEmitter.emit("myevent","amit");
//eventEmitter.removeListener("myevent",myCallBack);
//eventEmitter.emit("myevent","mike");

// N - Number of times we can emit the Event
/*
eventEmitter.emit("myevent","mike");
eventEmitter.emit("myevent","tom");
eventEmitter.emit("myevent","tim");
eventEmitter.emit("myevent","mike");
eventEmitter.emit("myevent","tom");
eventEmitter.emit("myevent","tim");
eventEmitter.emit("myevent","mike");
eventEmitter.emit("myevent","tom");
eventEmitter.emit("myevent","tim");
*/