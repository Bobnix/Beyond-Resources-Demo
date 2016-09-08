"use strict";

//Block scoping
var greeting = "hello";
{
	var _greeting = "welcome";
	console.log(_greeting);
}
console.log(greeting);

//Arrow functions
var names = ["Bob", "Rob", "Robert"];
names.forEach(function (name) {
	//And template strings
	return "Hello " + name + ", how are\n\tyou doing today. I can have newlines\n\tright in my template string";
});

//Real maps, weak maps, add sets need a polyfill