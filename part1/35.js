// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray; // myNewArray is an array of remaining values
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);


// eg:2 CONCATENATE TWO ARRAYS USING SPREAD OPERATOR

// const mynum = ["Ram", "sun" , "shyam", "krishna"];
// const onemoreArray = ["item3", "item4"]
// const myNewArray1 = [...mynum,...onemoreArray];
// console.log(myNewArray1);