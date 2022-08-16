// console.log("today we recap our all methods shall we start")

//  let numers = [1,2,3,4,5,6,7,8,9,10];
//  let num =[]

//  for(let i=0; i<numers.length; i++){
//       num.push(numers[i]*2);
//  }
//   console.log(num);

//  console.log(num.push("Ram")); 
    // console.log(num); 

// for(let i=0;i<num.length;i++){
//     num2.push(num[i]*2);
// }
// console.log(num2); // [2,4,6,8,10,12,14,16,18,20]

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// let fruits = ["apple","mango","banana","orange","grapes"];
// let fruits2 = []
// for(let i in fruits){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);


// let num;

// for(num in number){
//     num2.push(num[i]*2);
// }
// console.log(num2); // [2,4,6,8,10,12,14,16,18,20]



// let number = 100;
// let i= 0
// let total = 0 
// while(i<number){
//     total = total + i;
//     i++;
// } 
// console.log(total);

// for(let i = 1; i<=number; i++){
//     total = total + i;
// }
// console.log(total); // 5050


// while and do while loop

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// } // 0 1 2 3 4 5 6 7 8 9
 



// let i = 7;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);




// for(let i =0 ; i<9; i++){
//     if(i===3){
//         break
//     }
//     console.log(i);
// }
// // 0 1 2

// for(let i=0; i<9; i++){
//     if(i===3){
//         continue
//     }
//     console.log(i);
// }
// // 0 1 2 4 5 6 7 8

// let fruits = ["apple", "mango", "grapes"];
// fruits[3] = "banana";
// console.log(fruits);  

// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed); // [ 1, 2, 2.3, 'string', null, undefined ]
// let obj = {};

// console.log(typeof fruits); // object
// console.log(typeof obj); // object
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray(obj));  // false

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// fruits.push("banana");
// console.log(fruits); // [ 'apple', 'mango', 'grapes', 'banana' ]
// fruits.pop()
// console.log(fruits); // [ 'apple', 'mango', 'grapes' ]
// fruits.unshift("banana");
// console.log(fruits); // [ 'apple', 'mango', 'grapes', 'banana' ]
// fruits.shift();
// console.log(fruits); // [ 'mango', 'grapes', 'banana' ]



// spread operator

// let l = [1,2,3,4,5];
// let p = [6,7,8,9,10];

// let o = [...l, ...p];
// console.log(o); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// array desstructuring
// array destructuring 
// const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray; // myNewArray is an array of remaining values
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);


// object

// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }

// person["person"] = "male";  
// console.log(person);

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);


// difference between dot and bracket notaion

// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"],
//     "address": {
//         city: "chennai",
//         state: "tamilnadu",
//         country: "india",

//         pincode: "600089",
//         "address line 1": "49/23 jeeva nagar",
//         "address line 2": "second line",
//         "address line 3": "Newwashermenpet",
//     }

// }

// console.log(person.address["address line 1"]);
// console.log(person["person hobbies"]);
// // console.log(person.name)
// person[key] = "Ramachandran@gmail.com";
// console.log(person); 
// console.log(person.name)

// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }


// for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, ": ", person[key]);
// }


// spread operator in objects
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//   };
//   const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4",
//   };
  
// const newObject = { ...obj2, ...obj1, key69: "value69" };
//  const newObject = { ...["item1", "item2"] }; // ["item1", "item2"]
  // const newObject1 = { ..."abcdefghijklmnopqrstuvwxyz" };
  // console.log(newObject1);
  


// 20/07/2022

// const person = {
//   name: "Ramachandran S",
//   age: 25,
//   dob: "25/09/1996",
//   qualification: "B.C.A",
//   hobbies: ["cricket", "reading", "listening music"],
//   "job role": "developer",
//   address: {
//     city: "New York",
//     state: "New York",
//     country: "USA",
//     pincode: "10001",
//     "address line 1": "49/23 jeeva nagar",
//     "address line 2": "second line",
//     "address line 3": "Newwashermenpet",
//   },

// }

//  let {name, age, qualification, ...rest} = person;
// console.log(name);
// console.log(age);
// console.log(qualification);
// console.log(rest);


// array of objects destructuring

// const emoployer = [
//     {userId:652344, firstName:"Ramachandran", gender:"male", role: "senior process Executive", shift: "11.30 to 9.30"},
//     {userId:752040, firstName:"Arul", gender:"male", role: "process Executive", shift: "11.30 to 9.30"},
//     {userId:520464, firstName:"madhan", gender:"male", role: "process Specialist", shift: "11.30 to 9.30"},

// ]

// for(let emp of emoployer){
//     console.log(emp.role)
// }


 // nested destructuring 
// const users = [
//   {userId: 1,firstName: 'harshit', gender: 'male'},
//   {userId: 2,firstName: 'mohit', gender: 'male'},
//   {userId: 3,firstName: 'nitish', gender: ''},
// ]

// const [{ firstName: users2firstName, userId, }, { gender: users3gender }] =
// users;

// console.log(users2firstName);
// console.log(userId);
// console.log(users3gender);


// function isEven(num){
//   return num % 2 ==0

// }

// console.log(isEven(4))

// const products = [
//   {productId: 1, produceName: "p1",price: 300 },
//   {productId: 2, produceName: "p2",price: 3000 },
//   {productId: 3, produceName: "p3",price: 200 },
//   {productId: 4, produceName: "p4",price: 8000 },
//   {productId: 5, produceName: "p5",price: 500 },
// ]

// // // lowToHigh
// const lowToHigh = products.sort((a,b)=>{
//   return a.price - b.price
// });

// const highToLow = products.slice(0).sort((a,b)=>{
//   return b.price-a.price;
// });

// console.log(lowToHigh);
// console.log(highToLow);


// const users = [
//   {firstName: "harshit", age: 23},
//   {firstName: "mohit", age: 21},
//   {firstName: "nitish", age: 22},
//   {firstName: "garima", age: 20},
// ]


// users.sort((a,b)=>{
//   if(a.firstName > b.firstName){
//       return 1;
//   }else{
//       return -1;
//   }
// });

// console.log(users); 


// find method
// const users = [
//   {userId : 1, userName: "harshit"},
//   {userId : 2, userName: "harsh"},
//   {userId : 3, userName: "nitish"},
//   {userId : 4, userName: "mohit"},
//   {userId : 5, userName: "aaditya"},
// ];

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);

// const userCart = [
//   {productId: 1, productName: "mobile", price: 12000},
//   {productId: 2, productName: "laptop", price: 22000},
//   {productId: 3, productName: "tv", price: 35000},
// ]


// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);//

// const rus  = userCart.some((cartItem)=>cartItem.price < 30000);
// console.log(rus); //


// fill method

// const arr = [1,2,3,4,5];
//  arr.fill("Ram",1,2);// arr.fiil("firstvalue", startindex,endindex)
  // console.log(arr); // [1, "Ram", "Ram", "Ram", 5]

  // splice method
  // const arr = [1,2,3,4,5];
//  arr.splice(1, 2 ,"Ra") 
  // arr.splice(1,2,"Ram","Shyam");
  // console.log(arr); // [1, "Ram", "Shyam", 5]



  // remove duplicate from Array(new Set(myArray))
  // const arr = [1,2,3,4,5,1,2,3,4,5];
  // const newArr = [...new Set(arr)];
  // console.log(newArr); // [1, 2, 3, 4, 5]



//   const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// const person2 = {
//     id: 2,
//     firstName: "Ram"
// }

// const person1 = {
//   id: 1,
//   firstName: "harshit"
// }
// const person2 = {
//   id: 2,
//   firstName: "Ram"
// }




//  const extraInfo = new Map();
//  extraInfo.set(person1, {age: 8, gender: "male"});
//  extraInfo.set(person2, {age: 9, gender: "female"});
// //  console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);


// object clone

// const obj = {
//   key1 : "value1",
//   key2 : "value2"
// }

// const obj2 = {key8 : "valueRam", ...obj}
// obj.key3 = "Ram"
// console.log(obj)
// console.log(obj2)




// currying(call,apply,bind)

// const user1 = {
//   firstName : "harshit",
//   age: 8,   
// }
// const user2 = {
//   firstName : "mohit",
//   age: 9,
  
// }

// function result(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// result.call(user1,"senior process Executive","11.30 to 9.30");
// result.apply(user2,["senior process Executive","11.30 to 9.30"]);
// const func=result.bind(user2,["senior process Executive","11.30 to 9.30"])();
// func();


// closure

//  for(var i=0; i<10; i++){
//   function k(i){
//   setTimeout(()=>{
//     console.log(i);
//   },i*2000);
// }
//   k(i);
// }

// object inside function

// const user1 = {
//   firstName : "harshit",
//   age: 8,
//   result:result

// }
// const user2 = {
//   firstName : "mohit",
//   age: 9,
//   result:result
  
// }

// // function result(hobby, favMusician){
// //     console.log(this.firstName, this.age, hobby, favMusician);
// // }







// functions as arguments and return values




/// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
// 3. we can create a function outside and call it when they need required

const userMethods = {
  about : function(){
      return `${this.firstName} is ${this.age} years old.`;
  },
  is18 : function(){
      return this.age >= 18;
  }
}


// second  method using object:

// function createUser(firstName, lastName, email, age, address){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = userMethods.about;
//   user.is18 = userMethods.is18;
//   return user;
// }

// const k = createUser("harshit","kumar","aflja@gmail.com",8,"pune");
// console.log(k);
// console.log(k.about());
// console.log(k.is18());

// third method:

// function createUser(firstName, lastName, email, age, address){
//   const user = Object.create(userMethods);// {}
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }


// first method:
// function data(firstName, lastName, email, age, address){
//   const user = []
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about= function(){
//     console.log(`${this.firstName} is ${this.age} years old`);
//   }
//   user.isold18 = function(){
//     return this.age > 18;
//   }

//   return user;
// }

// const result  = data("harshit","kumar","slhlhl@gmailcom",16,"address");
// console.log(result);
// result.about();
// console.log(result.isold18());



//22.07.2022

// prototype with inheritance

// const obj1 = {
//   key1: "value1",
//   key2: "value2"
// }

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// console.log(obj2);
// console.log(obj1);



// function createUser(firstName, lastName, email, age, address){
//   const user = Object.create(createUser.prototype);// {}
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }
// createUser.prototype.about = function(){
//   return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//   return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//   return "la la la la ";
// }


// const u  ser1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user3.is18())


// constructor function

// function CreateUser(firstName, lastName, email, age, address){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }
// CreateUser.prototype.about = function(){
//   return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//   return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//   return "la la la la ";
// }

// hasOwnproperty

// for(let key in user1){
//   // console.log(key);
//   if(user1.hasOwnProperty(key)){
//       console.log(key);
//   }

// }



















// class es6 and using constructor function

class CreateUser{
  constructor(firstName, lastName, email, age, address){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.age = age;
      this.address = address;
  }

  about(){
      return `${this.firstName} is ${this.age} years old.`;
  }
  is18(){
      return this.age >= 18;
  }
  sing(){
      return "la la la la ";
  }

}


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));
// console.log(user1.is18());



// //  classs and using extends

// class Animal {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   about(){
//     return `${this.name} is ${this.age} years old.`;
//   }
//   is18(){

//     return this.age>=18;
//   }
//   default(){
//     return "everything going good";
//   }
// }

// class Dog extends Animal{

// }



// const dog1 = new Dog("harshit", 18);
// console.log(dog1);
// console.log(dog1.about());
// console.log(dog1.is18());
// console.log(dog1.default());
// console.log(dog1.__proto__);
// console.log(dog1.__proto__.__proto__);



// class and using super

// class Animal {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   about(){
//     return `${this.name} is ${this.age} years old.`;
//   }
//   is18(){

//     return this.age>=18;
//   }
//   default(){
//     return "default";
//   }
// }

// class Dog extends Animal{
//   constructor(name, age, speed){
//     super(name, age);
//     this.speed = speed;
//   }

//   run(){
//     return `${this.name} is running at ${this.speed} km/h`;
//   }

//  }



// class Animal{
//   constructor(name, age){
//  this.name = name;
//   this.age = age;
//  }
//  about(){
//    return `${this.name} is ${this.age} years old`
//  }
//  is18(){
//  return this.age >=18;

//  }
//  default(){
//  return "everything going good"
//  }
 

// }

// class Dog extends Animal{
  
// constructor(name, age, speed,){
//   super(name, age);
//   this.speed = speed;
// }

// run(){
// return `${this.name} is running at ${this.speed} km/h`;
// }

// }

// class final extends Dog{
// constructor(name, age, speed, breed){
// super(name, age, speed);
// this.breed = breed;
// }

// default1(){

// return `${this.name} is ${this.breed}`


// }


// }



// const final1 = new final("shero", 2, 43.5, "lab")
//  console.log(final1.default())
// console.log(final1.about());

// const dog1 = new Dog("toomy",2, 43.5);
// console.log(dog1.run()); // toomy is running at 43.5 km/h




// same method in subclass
// class Animal {
//   constructor(name, age){
//       this.name = name;
//       this.age = age;
//   }

//   eat(){
//       return `${this.name} is eating`;
//   }

//   isSuperCute(){
//       return this.age <= 1;
//   }

//   isCute(){
//       return true;
//   }
// }

// class Dog extends Animal{
//   constructor(name, age, speed){
//       super(name,age);
//       this.speed = speed;
//   }

//   eat(){
//       return `Modified Eat : ${this.name} is eating`
//   }

//   run(){
//       return `${this.name} is running at ${this.speed}kmph`
//   }
// } 

// object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// console.log(tommy.eat());

// const animal1 = new Animal('sheru', 2);
// console.log(animal1.eat());



// getter and setters 
// class Person{
//   constructor(firstName, lastName, age){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//   }
//   get fullName(){
//       return `${this.firstName} ${this.lastName}`
//   }
//   set fullName(fullName){
//       const [firstName, lastName] = fullName.split(" ");
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }
// }


// const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);





// static methods and properties
// class Person{
//   constructor(firstName, lastName, age){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//   }
//   static classInfo(){
//       return 'this is person class';
//   }
//   static desc = "static property";
//   get fullName(){
//       return `${this.firstName} ${this.lastName}`
//   }
//   set fullName(fullName){
//       const [firstName, lastName] = fullName.split(" ");
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }
//   eat(){
//       return `${this.firstName} is eating`;
//   }

//   isSuperCute(){
//       return this.age <= 1;
//   }

//   isCute(){
//       return true;
//   }
// }

// const person1 = new Person("harshit", "sharma", 8);
// console.log(person1.fullName);
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info); 
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1.isCute());
