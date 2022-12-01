// these all function statements 

function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

singHappyBirthday();
console.log(sumThreeNumbers(1,2,3));


// isEven
// input : 1 number 
// output : true , false 

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc")); // z

// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
        
    }
    return("please provide correct number")
    
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 90);
console.log(ans);





function findIndex(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            console.log(i)
        }
    }
}
const myArray1 = [1,3,8,90]
findIndex(myArray,8)
// const ans1 = findIndex(myArray, 8);
// console.log(ans1)
