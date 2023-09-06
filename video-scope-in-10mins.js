/*In JS there are four different types of scopes: global, module, function and a block scope.*/
/*Scope - A set of code that has variables defined in it and those variables are only accessible inside that scope.*/
const a = 1

function test () {
  const b = 2;
  console.log(a, b);
}
test();
console.log(a,b);//error on b. b is defined locally inside the function and not accessible outside of the function.

/*Variables defined within modules, can only be used within modules unless they are exported.*/

//Function and Block Scoping
function test() {
  const b = 2;

if (true) {
  const c = 3;
}
//variables within curly braces are block scope.