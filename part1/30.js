// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2 = [];
// let fruits3 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2); 


// for(let j=0; j< fruits.length; j++){
//     fruits3.push(fruits[j].toLowerCase());
// }
// console.log(fruits3); 


// let i =0;
// while(i<fruits.length){

//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }

// console.log(fruits2);

let num = [1,2,3,4,5,6,7,8,9,10];

let result = [];

for(let i=0; i<num.length; i++){
    if(num[i]%2==0){
        result.push(num[i]);
    }

} 
console.log(result); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]



