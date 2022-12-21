// call,apply,bind method functions (explicit Binding)

// let obj = {
//     name : "Rama",
//     age : 26
    

// }

// function printFullName(qualification, profession){
//     return "Hello " + this.name + " your age " + this.age + " and your qualification " + qualification + " and your profession " + profession

// }
// console.log(printFullName.call(obj, "BCA", "ReactJs Developer"))
// console.log(printFullName.apply(obj, ["BCA", "ReactJs Developer"]))
// const res =  printFullName.bind(obj, "BCA", "ReactJs Developer")
// console.log(res())




// question 1 : o.p based question

// const person = {
//     name: "Ram",
//     age:26
// }

// function say(profession){
//     return `${this.name} is ${this.age}, and ${profession}`
// }
// console.log(say.call(person, "Developer"))
// console.log(say.bind(person, "Developer"))



// question 2 : o.p based question


// const age = 10;

// const person = {
//     name:"Ram",
//     age:20,
//     getAge:function(){
//         return this.age
//     },

// };

// var person2 = { age:24 };
// console.log(person.getAge())
// console.log(person.getAge.call(person2));

// var status = '😎';

// setTimeout(()=>{
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };
//   console.log(data.getStatus()); 
//   console.log(data.getStatus.call(this)); 
// }, 0);


// question 3 : o.p based question


// question 4 : call printAnimal such that it prints all animal in object

// const  animals = [
//     {species: "lion", name:"king"},
//     {species: "whale", name:"queen"},
// ];

// function printAnimal(i){
//     this.print = function(){
//         console.log("$" + i + " " + this.species+ ": "+ this.name)
//     }
//     this.print()
// }

// for(let i =0; i<animals.length; i++){
//     printAnimal.call(animals[i],i)
// }


// question 5 :  append an array to another array1

// const array = ["a","c"]
// const element = [1, 2, 5,7]


// array.push.apply(array, element)
// console.log(array)


// coding question for interview

// function sumArray(a, b, k) {
//     var c = [];
//     for (var i = 0; i < Math.max(a.length, b.length, k.length); i++) {
//       c.push((a[i] || 0) + (b[i] || 0) + (k[i] || 0) );
//     }
//     return c;
// }
    

// console.log(sumArray([1, 2, 5, 7, 90],[1, 2, 8, 9], [7, 9])
// )



// question 6 : using apply to to find min and max in array

// loop based algorithm

//  const numbers = [5, 6, 1, 3, 7]

//  console.log(Math.max.apply(null,numbers))
//  console.log(Math.min.apply(null,numbers))




// const res  = numbers.reduce((max, curr)=>{
//     if(curr > max){
//         max=curr
//     }
//     return max

// },0)
// console.log(res)


// console.log(Math.max.apply(null, numbers))


// question 7 :Bound function


// function f(){
//     console.log(this)
// }

// let user = {
//     g: f.bind(null)
// }

// user.g()


// question 8 : bind chaining


// function checkPassword(success, failed){
//     let password = prompt("password?", "")
//     if(password =="Roadside") success();
//     else failed()
// }

// const user =  {
//     name : "Ram",

//     loginSuccessful(){
//         console.log(`${this.name} logged in`)
//     },
    
//     loginFailed(){
//         console.log(`${this.name} fail to login`)
//     },
// };

// checkPassword(user.loginSuccessful().bind(user))

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))



// question 9 ; o/ p based question

// function checkPassword(ok, fail){
//     let password = prompt("password?", "")
//     if(password =="Roadside") ok();
//     else fail()
// }

// const user =  {
//     name : "Ram",

//     login(result){
//         console.log(this.name + (result ? " login SuccessFull" : " login failed"))
//     }
// };
// checkPassword(user.login.bind(user, true), user.login.bind(user, false))




// question 10 :  Explicit Bind with arrow function

// arrow function this keyed it's represent window  not local object.
// it's major different in arrow function

// const age = 58;

// const person = {
//     name : "Ram",
//     age: 25,
//     getArrow : ()=> console.log(this.age),
//     getAge: function() {
//         console.log(this.age)
//     }
// }

// var person2 = { age: 24}

// person.getArrow.call(person2)
// person.getAge.call(person2)




