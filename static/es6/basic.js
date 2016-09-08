//Block scoping
let greeting = "hello";
{
	let greeting = "welcome";
	console.log(greeting);
}
console.log(greeting);

//Arrow functions
var names = ["Bob", "Rob", "Robert"];
names.forEach(name => {
	//And template strings
	console.log(`Hello ${name}, how are
	you doing today. I can have newlines
	right in my template string`);
}); 

//Real maps, weak maps, add sets need a polyfill