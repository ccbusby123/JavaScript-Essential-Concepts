//Video on JS Scope
//Local variables are inside functions or any other type of code block. Global variables are outside and are available to use anywhere.
//Scope - Where variables are declared and where they can be accessed.
//Global variables - convenient but don't use too often.
  let game = 'Sonic';//gloabal variable
  console.log (game);

  function title(){
    console.log(`${game}`);
  }
  title();

  if(true) {
    console.log(`${game}`);
  }
//Local Variables
function a() {
  let game = 'Sonic';//local scope
}
console.log (game);//game is undefined globally - only defined locally in the function.

if (true) {
  console.log (game);//game is not defined - game is only available within the function.
}
function a() {
  let game = 'Sonic';//local scope and funcional scope.
  console.log(game);//Sonic is logged in the console because variable is local.
}
a();
if (true) {
 let game = 'Mario';
  console.log (game);//Mario is logged in console.
}
/*Variables can have the same name if they are defined within different code blocks. Local scop variables are only available in the scope they are defined and declared in.*/

/*Advantages of local scoping - security (variables would not be overwritten). Global variables values can be changed.*/

//Variables inside a function have functional scope.

//Let and Const are said to be lock scoped. Var is not.
//Example of a variable name clash.
var x = 10;
console.log (x);//10

if(trure) {
  var x = 2;
  console.log (x);//2
}
console.log (x);//2


let x = 10;
console.log (x);//x is 10

if (true) {
  let x = 2;
  console.log(x);//x is 2
}

console.log(x);// x is 10


Video Tasks
//Task 1
let firstName = "John";
let lastName = "Smith";
let age = 25;

function b() {
alert(`${firstName} ${lastName} is ${age} years old.`)
};
b();

//Task 2
function b() {
  let firstName = "John";
let lastName = "Smith";
let age = 25;
let country = 'England';
alert(`${firstName} ${lastName} is ${age} years old and lives in ${country}.`)
};
//Task 3
let firstName = "James";// No problem encountered. firstName is James outside of the function.
b();

//Task 4
/*Mario for the if code block and Sonic for the console.log outside of the if code block.*/