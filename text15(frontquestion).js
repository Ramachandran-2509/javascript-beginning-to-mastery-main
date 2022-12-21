/* 

what is Ecmascript?
The Ecmascript is spifies the the way of working in general -purpose programming language javascript 



var is global scope and function scope
let and cosnst are block scope

what is functional scope
and block scope

what is block the the block contains were main the set of statement  excution in particular bloack

{
const a = "Ram"
console.log(a)
}



the spread operator using spread the value of array
rest operator must be last only it's main thing it's mainly used for functions it's takes rest of values in function
default parameter we used some it our functions because
when we create default we set value for last parameter when user fail to miss the any argument it will take default value


function Default(a,b=10){
	console.log(a)
  console.log(b)
  
}
Default(7,null)

shallow copy is reference of object not for value of object
eg:
const person={
	name:"Ram",
  age:25
}
const person2= person
person.age = 35
console.log(person)
console.log(person2
 
 deep copy is copy the value of object and create new object

deep copy create 3 ways 

const person={
	name:"Ram",
  age:25
}


const person={
	name:"Ram",
  age:25
}

/* const person2 = {...person} */
/* const person2 = Object.assign({}, person) */
/* const person2 = JSON.parse(JSON.stringify(person))
person.age=28;
console.log(person)
console.log(person2)


synchronous programming vs asynchronous programming
whats is callback and promise and async AWait

callback function it's take another function are argument
promise and callback they both are synchronous task to run asynchronous task

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code


 */


// What is event bubbling and event capturing in
// Javascript

{/* <div id="Main">
<div id="parent">
  <div id="child">
    child
  </div>
  <div id="other">
    other
  </div>
</div>

</div> */}

// body{
//     height: 300px;
//     width: 300px;
//     border: 2px solid blue;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//   }
  
//   #Main{
//     height: 100px;
    
//     width: 100px;
//     border: 2px solid red;
//     background-color: skyblue;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//   }
  
//   #parent{
//     height: 90%;
//      width: 90%;
//      border: 2px solid yellow;
//   }
  
//   #other{
//      height: 20px;
//      width: 70px;
//      border: 2px solid blue;
//      margin: 5px 5px;
//      padding: 3px 3px;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      cursor: pointer;
    
//   }
  
//   #child{
//      height: 20px;
//      width: 70px;
//      border: 2px solid blue;
//      margin: 5px 5px;
//      padding: 3px 3px;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      cursor: pointer;
    
//   }



// Event Bubbling

// var p = document.querySelector("#parent")

// p.addEventListener("click", function(){
// 	console.log("parent Clicked")
// })

// var c = document.querySelector("#child")

// c.addEventListener("click", function(){
// 	console.log("child Clicked")
// })

// Event capturing

// var p = document.querySelector("#parent")

// p.addEventListener("click", function(){
// 	console.log("parent Clicked")
// },true)

// var c = document.querySelector("#child")

// c.addEventListener("click", function(){
// 	console.log("child Clicked")
// },true)



// What is higher order function in Javascript
// 
// the higher order function is take another function is argument or return function

// example

// const radius = [3,1,2,4]

// const area= function (radius){
//     return Math.PI * radius * radius
// }

// const circumference= function (radius){
//     return 2 * Math.PI * radius
// }

// const diameter= function (radius){
//     return 2 * radius
// }


// const calculator  = function(radius, logic){
//     let res= []
//     for(let i=0; i<radius.length; i++){
//         res.push(logic(radius[i]))
//     }
//     return res;
// }
// console.log(calculator(radius, area))
// console.log(calculator(radius, circumference))
// console.log(calculator(radius, diameter))



// set and map

// one dimension for unique value only
// set is more similar for array are some remove duplicates and
// array based index right but set don't have indexing

// const arr= [1,2,5,4,6,1,2,2,1]
// console.log(arr)
// const set1= new Set(arr)

// methods
// set1.add({name:"Ram"})
// set1.delete(9);
// set.clear()
// set1.has(2) //  it's if number is present true or false
// set1.size()//  length of object
// console.log(set1)


// map

// map two dimension for unique key and value

// const myMap = new Map([ ["name","Ram"] ,["age",25] ])
// console.log(myMap)

// const obj = {}

// const a = {};
// const b = {};

// obj[a]="a"
// obj[b]="b"
// console.log(obj) // we will get last object modified {[object][object]:b}

// but we want a and b both object to insert in obj right

// const a = {};
// const b = {};

// const myMap = new Map([ [{},"a"] ,[{},"b"] ])

// myMap.set({},"c")
// myMap.delete(1)
// myMap.clear()
//myMap.has() // if it's preset key give true or else give false
//myMap.size() // length of object
// console.log(myMap)







// What is Weakmap and Weakset in Javascript


// weakSet
// only store object
// we can add and delete and has 
// it can not interated


// let ws = new WeakSet();
// var obj1 = {"name":"Ram"}
// var obj2 = {}
// ws.add(obj1);
// ws.add(obj2);
// console.log(ws)


// WeakMap
// only store object
// we can set and delete and get and has 
// it can not interated


// let ws=new WeakMap()

// var obj3 = {"name":"Ram"};
// var obj4 = {};

// ws.Set(obj3, "private")
// ws.Set(obj3, "public")
// console.log(wm)






// iMmutable to mutable  using these three property object seal and freeze and Extensions

 

// const config ={

//   appName: "roadMap.sh",
//   dataBase:{
//       host:"127.00.00.1",
//       name:"roadMap",
//       user:"root",
//       pwd:"r@@R"
//   }
// };

// Object.freeze(config) 
// it's means freeze the object we can read it
// but not update and also not delete the object 
// it;s applicable for top you can update the dataBase object
// if you want freeze  the nested object you can freeze you won't update any data only read it



// we can change if is not freeze it 
// freeze commonly work upper level object 
// if you want freeze it nested object we can freeze it

// config.dataBase.name="userName"

// console.log(config)
// Object.freeze(config)
// Object.freeze(config.dataBase)

// now we can freeze full object now only we can read it only





// object.seal(config)

// Object.seal(config) 

// it's means seal the object we can read it 
// but we can update and also not delete the object and you can't new property and value
// it;s applicable for top you can update the dataBase object
// if you want seal  the nested object you can seal you won't update any data only read it

// object.PreventExtensions


// it's means PreventExtensions the object we can read it 
// but we can update and also  delete the object and you can't new property and value
// once delete the object again same name object not acceptable and rename the new object
// it's applicable for top you can update the dataBase object
// if you want PreventExtensions  the nested object you can PreventExtensions you won't update any data only read it




// Write the program sort in array

//   const arr1=[-3,8,7,6,5,-4,3,2,-5,1];
//   const arr2=[];
// let min=arr1[0];
// let pos;
// var max=arr1[0];
// for (let i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
// } 

// for (var i=0;i<arr1.length;i++)
// {
//         for (let j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }
// console.log(arr2);


// function func() {
  //Original string
  // var arr=[-3,8,7,6,5,-4,3,2,1,-5];

  //Sorting the array
  // console.log(arr.sort());
  // console.log(arr);
// }
// func();





// string reversed

// Input: 'hello world'
// output : 'olleh dlrow'

// const arr= "hello world"
// const res= arr.split("").reverse().join()
// console.log(res)

// function stringReverseWord(str){

// const splitArray = str.split(/[ ,]+/)

// let final_Result = ""
// let cache=""

// for(let i=0; i<splitArray.length; i++){
//     for(let j=0; j<splitArray[i].length; +j++){
//         cache=splitArray[i][j]+cache
//     }
//     final_Result = final_Result + " "+ cache;
//     cache=""

// }
// return final_Result


// }

// console.log(stringReverseWord("hello world"))


//  create a function findSum(arr=[], n=number) takes on
//  integer array arr and return an array of two integer elements





// code
// resultArr=6
// function findSum(arr, resultArr){

//   let res=[]

//   for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         if((arr[i]+arr[i+j])===resultArr){
//           res.push(arr[i],arr[i+j])
//         }
//     }
    

//   }

//   return res

// }

// console.log(findSum([0,1,2,3,4,5,6], 6))


// another way  to get above result

// arr=[0,1,2,3,4,5,6];
// resultArr=6;

// function findSum(arr,resultArr){

//   let res=[]
//   cache={}

//   for(let i=0; i<arr.length; i++){
//       if(cache[arr[i]]){
//         res.push([resultArr-arr[i], arr[i]])
//       }
//       else{
//           cache[resultArr-arr[i]]=true;
//       }
//   }


// return res

// }


// console.log(findSum(arr, resultArr))



// memoize function


// function sum(a,b){
//     console.log(`calculating the sum far ${a} and ${b}`)
//     return a+b;
// }

// function memoize(func){
//   let cache={}

//   return function(a,b){
//       const key = a+ " "+ b;

//       if(cache[key]){
//         return cache[key]
//       }
//       else{
//           cache[key] = func(a,b)
//           return cache[key]
//       }

//   }


// }
// const result= memoize(sum)
// console.log(result(1,2))
// console.log(result(  2,4))
// console.log(result(1,2))





// print  Prime number 1 to 100

// function isPrime(n){

//   if(n==1|| n == 0) return false;
  
//   for(let i=2; i<n; i++){
  
//   if(n%i==0) return false
//   }
//   return true
  
//   }
  
//   var N=10;
  
//   for(let i=1; i<=N; i++){
  
//   if(isPrime(i)){
//     console.log(i)
//   }
//   }



// print the largest prime in the below array


// const arr=[4,5,7,8,9,11,12,17,97,47]

// function isPrime(number){
// 	if(number%2==0 || number < 2) return false;

// 	for(fact=3; fact<Math.sqrt(number); fact+=2){
//   		if(number%fact==0)return false
//   }
//   return true

// }
// console.log(arr.sort((a,b)=>a-b).findLast(isPrime))