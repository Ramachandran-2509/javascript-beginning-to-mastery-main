


// we can create key and value pair in separate then
// we add the key and value for empty object.

// now we can create object and add key and value pair it's only single object

// example 1
// const person = {
//     firstName: "Ram",
//     age: 26
// }

// person['qualification']="BCA"

// person['address line 1']= "43/29 jeeva nagar"

// console.log(person)



// now first we can create individual empty object 
// second we can 2 key for individual
// third we can 2 value for individual
// fourth now we have empty object right 
// so we insert key and value in dynamically see the below example


// example 1

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);




// now we can create one object with key and value pair
// our task is create one more object and we clone from first object key and value pairs
// and also we can add more key and value pair in our second object
// this is task the below example for your reference





// const obj = {
//     key1 : "value1",
//     key2 : "value2"
//   }
//   const obj2=Object.assign({key70:"valueRam"}, obj)
//   const obj4 = {key8 : "valueRam", ...obj}
//   obj.key3 = "Ram"
//   console.log(obj)
//   console.log(obj2)




// now we can create one object with key and value pair
// later we can create one more object and 
// this time we can use Object.create(obj)
// now we access only for key only
// second obj only have their own key and value pair not clone for first object 
// below example for your reference

//   const obj = {
//     key1 : "value1",
//     key2 : "value2"
//   }


//   const obj2=Object.create(obj)

//   obj2.key3="valueRam"
//   console.log(obj2.key2)















// optional chaining


// const user  = {
//     firstName: "harshit",
//     age : "23",
//      address: 
//      {
//         houseNumber: '1234',
//         addressLine1: '49/23 jeeva nagar',
//         // address_line_1: "49/23 jeeva nagar",
//         addressLine2: 'xyz',   
//         street: 'abc street',
//         city: 'pune',
//         state: 'maharashtra',
//         country: 'india',
//         pincode: '400089'
    
//     }
// }



// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);
// console.log(user?.age);
// console.log(user?.address["addressLine1"]);



// methods
// function inside object

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "Ram",
//     age: 8,
//     about: personInfo
// }
// const person2 = {
//     firstName : "Mani",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName : "Munna",
//     age: 17,
//     about: personInfo
// }

// person1.about(); // person name is harsh and age is 8
// person2.about(); // person name is mohit and age is 18  
// person3.about();






// **********************************import topic """"""""""""""""""""""""""""


// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,
    
// }



// apply
// about.call(user1, "singing", "ram");
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();








// arrow functions 

// it's show output for window
// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }   
// }
// user1.about




// it's show output for this object only
// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }

// user1.about










// function create using multiple objects


// example one

// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);
// console.log(is18);







// example 2

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user3.about());



// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'Happy to be here';
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user3.sing());













// prototype method//

// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user3.about());
// console.log(user3.is18());




// constructor function 
// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());







// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "la la la la ";
//     }

// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));
// console.log(user2.is18());