// every method is manially used to sort the array

 const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);  

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);


// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// while(i<9){
//     console.log(i);
//     i++;

// }

// for( let i=0; i<9; i++){
//     if(i===3){
//         continue
//     }
//     console.log(i);
// }

// for(let i = 0; i<9; i++){
//     console.log(i);
// }

//  const numbers = [1,2,3,4,5,6,7,8,9];

// for(number in numbers){
//console.log(number[i]);
//      console.log(numbers[number]);
//  }
// var res = numbers.forEach((number)=>{

//     console.log(number*2);
// });
// console.log(res);

// var l = numbers.reduce((max, curr)=> {
//         if(curr >max){
//             max = curr;
//         }

//         return max;


// },0)
// console.log(l);





