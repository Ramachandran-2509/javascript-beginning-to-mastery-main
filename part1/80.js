




const obj1 = {
    key1: "value1",
    key2: "value2"
}

// var arr = [1, 2, 3, 4, 5];

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]



// prototype    
const obj2 = Object.create(obj1); // {}
// // there is one more way to create empty object
obj2.key13  = "value3";
obj2.key2  = "unique";
console.log(obj2);

 console.log(obj2.__proto__);
// console.log(obj2.__proto__.__proto__);
// console.log(obj2.__proto__.__proto__.__proto__);
