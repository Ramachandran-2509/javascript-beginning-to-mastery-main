
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
//     person3.age = 20;
//     console.log(person1);
//     console.log(person3);



// how to clone object using deep copy

// const person10 = {
//     name: "kanmani",
//     age: 25,
// }

// // 3 ways clone object

// const objectclone = Object.assign({}, person10);
// const objectclone2 = JSON.parse(JSON.stringify(person10));
// const objectclone3 = {...person10};


//  console.log(objectclone3);
