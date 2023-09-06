// program to show the change in global variable
let a = 3;

function greet() {
    a = "Hello Code Labs";
}

// before the function call
console.log(a);//3

//after the function call
greet();
console.log(a); // Hello Code Labs

// program showing local scope of a variable
let a = "Hello";

function greet() {
    let b = " Code Labs";
    console.log(a + b);
}

greet();//Hello Code Labs
console.log(a + b); // error because variable b can only be accessed inside the function.