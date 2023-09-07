//Function hoisting - invoking the function before its actually created in the code.
boomer ("football");//invocation or call

function boomer(sport) {
  console.log (`Boomer is at the ${sport} game.`)//function declaration
}
//This works becuase the declaration is being hoisted.

//Functions that are assigned to a variable (function expressions) cannot be hoisted.
let sum = function (n1, n2) {
  return n1 + n2;
};
