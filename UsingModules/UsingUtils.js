var util= require("util");
var complexJsonObject = {
"obj1":{
		"obj2":{
				"obj3":{
						"obj4":{
							"obj5":{
								"obj6":{
								}
							}
						}
				}
		}
}
};
util.log("Start Time ");
console.log("Printing the Complex Object ");
console.log(complexJsonObject);
console.log(util.inspect(complexJsonObject,{showHidden:true,depth:null}));
var x = [90,78];
console.log("Is Array ", util.isArray(x));
console.log("Is Date ", util.isDate(new Date()));
console.log("Is Undefined ", util.isNullOrUndefined(undefined));
console.log("Is Null ", util.isNullOrUndefined(null));
util.log("End Time ");
