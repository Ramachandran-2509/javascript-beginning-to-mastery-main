// currying:

// currying is a technique to create a function

//that takes some of the arguments of the original

// function and returns a function that takes the rest of the arguments.

// example1  : function k() to k()() write function

// function k1(a,b){
//     console.log(a, b)
// }

// k1(1,2);

// function k(a){
//     return function (b){
//         return function (c){
//             return`${a} ${b} ${c}`
//         }
//     }
// }
// console.log(k(2)(3)(4));   // 2 3 4

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
// outer functions scope
//       return function (d) {
// local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// example2 : currying function

//  question 1 - sum(2)(6)(1)

// function l(a){
//     return (b)=>{
//         return (c)=>{
//             return a+b+c;
//         }
//     }
// }
// console.log(l(2)(6)(1)); // 9

// example3 : currying function
// question 2 -
//  evaluate("add",(4)(2))
//  evaluate("mul",(4)(2))=>8
//  evaluate("sub",(4)(2))=>2
//  evaluate("div",(4)(2))=>2

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "substract") return a / b;
//       else return " Invalid Operation ";
//     };
//   };
// }

// console.log(evaluate("sum")(4)(2));

// create infinite currying

// function add(a){
//     return function(b){
//       if(b) return add(a+b);
//     return a;

//   }

// }

// console.log(add(4)(2)(8)());

// function curry(func){
//     return function curriedFunc(...args){
//       if(args.length>=func.length){
//         return func(... args);
//       }else{
//         return function(... next){
//           return curriedFunc(... args,... next);
//   }
//     };
//   }
// };
// const sum = (a,b,c,d)=>a+b+c+d;
// const totalSum = curry(sum);
// console.log(totalSum(1)(6)(5)(78));
