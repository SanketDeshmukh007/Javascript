// Immediately Invoked Function Expressions (IIFE)

/* 
IIFE is used to avoid global scope pollution problem
Variables defined inside an IIFE are not accessible outside the function,
which prevents them from polluting the global scope.
*/

(function() {
    var a = 10;  // 'a' is only accessible inside this function
    console.log(a);
  })();
console.log(a);  // Error: 'a' is not defined
  

// (function definition)();

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); // use semicolon else editor dont know when to stop code

// simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');