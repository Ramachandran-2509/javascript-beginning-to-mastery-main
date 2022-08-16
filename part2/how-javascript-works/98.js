// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

 const ans = printFullName("harshit", "sharma");
// // console.log(ans);
 ans();

// function z(){
//     var a = 20;
//     // console.log(a);
//     function x(){
//         function y(){
//             var b = 10;
//             console.log(a, b);
//         }
        
//         y();
//     }
    
//     x();
// }
// var a =12;
// console.log(a);
// z();
