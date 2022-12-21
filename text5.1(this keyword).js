// this keyword in javascript (Implicit Binding)
// explain 'this' keyword

// this.a = 5;

// console.log(this)


// let user={
//     name:"Ram",
//     age:"25",
//     getDetails(){
//         console.log(this.name)
//         console.log("age :",this.age, "" ,"name:",this.name)
//     },
// };

// user.getDetails()


// using arrow function in this keyword

//  let user={
//      name:"Ram",
//      age:"25",
//      getDetails:()=>{
//          console.log(this.name)
//      },
//  };

//  user.getDetails(this.name)


// q:1

// const user={
//     firstName:"Ram",
//     childObj:{
//         NewName : "Rama S",
//         getName(){
//             console.log(this.NewName, "and", this.firstName)
//         }
//     }
    
// }

// user.childObj.getName()


//q 2

// const user={
//     firstName:"Ram",

//     getName(){
//         const firstName ="Ramachandran"
//         return this.firstName;
//     }
// }

// console.log(user.getName())


// q 3

// first we get window object
// function makeUser(){
//     return{
//         name:"john",
//         ref:this,
//     }
// }


// how will fix this issue the below example for your reference

// function makeUser(){
//     return{
//         name:"john",
//         ref(){
//             return this
//         }
//     }
// }

// const user = makeUser()
// console.log(user.ref) => ref refer to window that's y we don't get any output
// console.log(user.ref().name)
// john output








// q 4

// const user = {
//     name:"Ram",
//     logMessage(){
//         console.log(this.name)
//     }
// }

// setTimeout(user.logMessage,1000)
// setTimeout(function(){
//     user.logMessage()
// },1000)


// q 5t


// const user={
//     name:"Ram",
//     greet(){
//         return `Hello, ${this.name}`
//     },
//     farewell: ()=>{
//         return `Goodbye, ${this.name}`
//     }
// }
// console.log(user.greet())
// console.log(user.farewell())


// q 6 create calculator

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );


// q 7

// var length=4;

// function callback(){
//     console.log(this.length)
// }

// const object={
//     length:5,
//     method(fn){
//         fn()
//     }
// }

// object.method(callback)


// q 7

// var length=4;

// function callback(){
//     console.log(this.length)
// }

// const object={
//     length:5,
//     method(){
//         arguments[0]()
//     }
// }

// object.method(callback, 2 , 3)


// q 8


// const calc = {
//     total:0,
//     add(a){
//         this.total += a
//         return this
//     },
//     multiply(a){
//         this.total *= a
//         return this
//     },
//     subtract(a){
//         this.total -= a
//         return this
//     },
// }

// const res = calc.add(10).multiply(5).subtract(30).add(10)
// console.log(res.total)




// q 9



function Calculator() {
    this.sum = 0;
    this.number = function (initialValue) {
      this.sum = initialValue;
      return this;
    };
  
    this.add = function (val) {
      this.sum += val;
      return this;
    };
    this.sub = function (val) {
      this.sum -= val;
      return this;
    };
    this.multiply = function (val) {
      this.sum *= val;
      return this;
    };
    this.divide = function (val) {
      this.sum /= val;
      return this;
    };
    this.print = function () {
      console.log(this.sum);
      return this;
    };
  }
  const calc = new Calculator();
  calc
    .number(10)
    .add(3)
    .print()
    .sub(6)
    .print()
    .multiply(10)
    .print()
    .divide(2)
    .print();
