
// object are used to store data in a structured way

// const user = {
//     Name: "begginer programmer JS",
//     age: "20",
//     profession:"Junior React Developer"
// };


// console.log(user);
// user.Name = "Ramachandran channel";
// console.log(user);


// if you delete age property from user object, 
// it will delete the property from the object

// delete user.age;
// console.log(user);


// question 1 : using delete method to delete property from object
// the below code will delete method used it's won't work
// because delete method is used for object but now 
// we can declare the local variable that's why it  won't works


// const func = (function(a){
//     delete a
//     return a;
// })(5)

// console.log(func); // 5 


// question 2 : how to add key and value in object

// const user = {
//     Name: "begginer programmer JS",
//     age: "20",
// };

// const property = "qualification"
// const value = "BCA"

// user[property] = value;
// console.log(user);


// question 3 :  how to get keys  and value pairs in object

// const user = {    
//     Name: "begginer programmer JS",
//     age: "20",
// };

// if you want print both key and value pair


// Object.entries(user).forEach(([key, value])=>{
//     console.log(`${key}: ${value}`)
// })

// Object.entries(user)
// .forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//     console.log(key.toUpperCase() ,":", value)
// })


// if you want print individual key

// Object.keys(user)
// .forEach((key) => {
//     console.log(key)
//     console.log(key.toUpperCase());
// })

// if you want print individual value

// Object.values(user).
//     forEach((value) => {
//         console.log(value);
//     }
// )


// loop through we can get key and value



// for(key in user){
//  console.log(key);
    //   console.log(user[key]);
// }



//  expect output 200,400, mynums

//  let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums"
// };

// multiplybytwo(nums)

// function multiplybytwo(obj){
//     for(let key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] *= 2
//         }
//     }
// }
// console.log(nums)

// question 9 : destructuring object

// let user = {
//     Name: "begginer programmer JS",
//     age: "20",
//     fullName: {
//         firstName: "Ramachandran",
//         lastName: "s",
//     }
// }

// if you want chnange key name in destructuring object

// localstorage
// localStorage.setItem("test", user)

// const Name =  "Roadside coder";
// const {Name:Name1} = user;
// console.log(Name)
// console.log(user.Name)
// const {fullName:{lastName,firstName}} = user 
// console.log(lastName,firstName);

// if you want to print name and age using destructuring

// const {Name, age} = user;
// console.log(Name + "  "+ age);


// if you want acces in nested object

//  const {fullName: {firstName, lastName}} = user;
//     console.log(firstName + " " + lastName);



// question 10 : o/p based questions

// function getItems(fruitList, favouRiteFruit,...args){
//     return[...fruitList,...args,favouRiteFruit]


// }

// console.log(getItems(["banana", "apple"], "pears", "grapes"));



// question 11 : o/ p based questions
 
// let c  =  {greeting : "hey"};
// let d;

// d = c;
// c.greeting = "hello";
// console.log(d.greeting);


// question 12 : o/p based questions

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});


// question 13 : o/p based questions

// let person = {name: "Ramachandran"};
// const members = [person];
// person = null;
// console.log(members);




// question 14 : o/p based questions


// const value = { number : 10};

// const multiply = (x = {...value}) => {
//     console.log(x.number *= 2);
// }

// multiply();     // 20
// multiply();     // 20
// multiply(value); // 20
// multiply(value); // 40


// question 15 : o/p based questions

//  function changeAgeAndReference(person){
//     person.age = 20;

//     person = {
//         name: "Ramachandran s",
//         age: 25,
//     }

//     return person;
//  }


//     const personobj1 = {
//         name: "kanmani",
//         age: 25,
//     }
 

//  const personobj2 = changeAgeAndReference(personobj1);
//     console.log(personobj1);
//     console.log(personobj2);



// question 16 : what is shallow copy and deep copy

// shallow copy : copy the reference of the object and 
//  not the value of the object

// examlpe :
//  const person = { 
//      name: "kanmani",
//      age: 25,
// }

//     const person2 = person;
//     person.age = 20;
//     console.log(person);
//     console.log(person2)


// deep copy : copy the value of the object and create new object 


// example :
// const person1 = {
//     name: "kanmani",
//     age: 25,

// }

//     const person3 = {...person1};
//     person1.age = 20;
//     console.log(person1);
//     console.log(person3)



// how to clone object using deep copy

// const person1 = {
//     name: "kanmani",
//     age: 25,
// }

// 3 ways clone object

// const objectclone = Object.assign({}, person1);
// const objectclone2 = JSON.parse(JSON.stringify(person1));
// const objectclone3 = {...person1};


// console.log(objectclone3);


// const user = {
//     "first" : new Date(),
//     "second" : 2,
//     "third" : "test"
// }


// for(let key in user){
//     console.log(key);
// }

// Object.entries(user)
// .forEach(([key, value]) => {
//     if(user[key]==="third"){
//         console.log(value);    
//     }
// console.log(`${key}: ${value}`);
// })
// const arr=[1,2,3,0,0,4,5,0]
// const zero= 0

// const res= [arr.filter((el)=>el!==zero), arr.filter(el=> el==zero)].flat();
// console.log(res)


// q 10

// Creating objects


// Fours ways of creating an object in JavaScript 


// 1. object as a literal

var car = {
    model: 'bmw',
    color: 'red',
    price: 2000,
    engine : {
    	type :'petrol',
    	power : 120
    }
}

car.owner = 'foo';


Object.defineProperty(car, "yearmade", {
    writable: true,
    enumerable: true,
    configurable: false,
    value: 1984
});

console.log(JSON.stringify(car));

// 2. using the new operator a.k.s Constructor Invocation Pattern


 
function Car(model, color) {
    this.model = model;
    this.color = color;
    Object.defineProperty(this, "yearMade", {
    writable: true,
    enumerable: true,
    configurable: false,
    value: 1984
});

}

console.log(Car.prototype);

var c1 = new Car('BMW','Red');
var c2 = new Car('Audi','Black');
console.log(c1.yearMade);

// 3 using the Object.create() method 

//it allows you to create an object from an existing object 

var Car1 = {
    model: 'BMW',
    color: 'red'
}

var ElectricCar = Object.create(Car1,{ym:{
	writable: true,
    enumerable: true,
    configurable: false,
    value: 1984
}});

     // BMW


// 4 using the class starting  ES6 


class Car3 {
 
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
 
    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}

var carobj1 = new Car3('BMW',2000);
carobj1.getInfo();



