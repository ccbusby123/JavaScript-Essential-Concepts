//Hoisting Example

console.log(greet); //undefined is assigned to the variable greet.
var greet;


//Functions and variables can be used before declaration.
//Declarations are moved to the top and initializations/assignments are left in place.
//Two hoisting types: variable and function

//Declaration example - var author;
//Initialization example - author = 'C.S. Lewis'
//Usage console.log(author)
//We usually declare and initialize at the same time var author = 'C.S. Lewis'
//Let and Const Do Not allow hoisting. Var does.

//Hoisting - Let/Const
console.log (greet);
let greet;
//Error is caused because the call cannot access the variable before declaration.
