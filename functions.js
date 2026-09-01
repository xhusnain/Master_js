// a();
// b();
// function statement
function a (){
    console.log(" a")
}
// function expressions
let b = function (){
    console.log("b")
}
a();
b();
// The major difference between a function declaration and a function expression
// is how they are hoisted.
//
// A function declaration is hoisted with its complete function definition,
// so we can call it before the line where the function is written.
//
// A function expression assigns a function to a variable.
// The function itself is not available before the assignment is executed.
// With `var`, the variable is hoisted as `undefined`, while with `let` and `const`,
// the variable is in the Temporal Dead Zone (TDZ) until the declaration is reached.
//
// In short:
// Function declaration → function is available before its definition.
// Function expression → function becomes available when the assignment is executed.


//Anonymous function
// A function without a name is called an anonymous function.
// Anonymous functions are commonly used in function expressions,
// where the function is assigned to a variable.

// function (){
//     console.log("Anonymous")
// }
// we got error in this example "Function statements require a function name" its a syntax error cause in js we need to assign them to a verifiable or
// we need to make there some name

// Named function expression
// A function expression that has a name is called a named function expression.

let d = function g() {
    console.log("Hello");
};

// We cannot access `g` outside the function expression.
// `g` is only available inside the function itself.
//
// We can access the function through `d`:
d();

// But this will not work:
// g(); // ReferenceError

// Parameters and Arguments
function e(parm1, parm2) {
    console.log(parm1, parm2);
}
e(1,2)
// see in top we name param1 and 2 these are the params and the then we call the function and pass 1 and 2 these are known as arguments

// First class function
// The ability of functions to be treated like values is known as
// "first-class functions".
//
// This means we can:
// 1. Assign a function to a variable.
// 2. Pass a function as an argument to another function.
// 3. Return a function from another function.
// 4. Store functions in objects or arrays.


function f(fn){
    console.log(fn);
}

f(function(){});
