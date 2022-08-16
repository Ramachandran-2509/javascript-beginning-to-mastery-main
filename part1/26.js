// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed); // [ 1, 2, 2.3, 'string', null, undefined ]
// console.log(numbers);  // [1,2,3,4]
// console.log(fruits[2]); //grapes
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits); // [ 'apple', 'banana', 'grapes' ]
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj)); // false


// array indexing starts from 0