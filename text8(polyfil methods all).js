// polyfill for all the methods


    let car1 = {
        color : "red",
        company: "ferrari"
    }

    function purChaseCar(currency, price){
        console.log(`I have purchased ${this.company}  ${this.color} car for ${currency} ${price} `)
    }

// purChaseCar.call(car1, "£", 50000000)


// polyfills for call methods

Function.Prototype.myCall = function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "It's not callable");
    }
    
    context.fn = this;
    context.fn(...args);
};
purChaseCar.myCall(car1, "£", 50000000)
// purChaseCar.call(car1, "£", 50000000)



// apply method using polyfill


// Function.Prototype.myapply = function(context={}, args=[]){
//     if(typeof this !== "function"){
//         throw new Error(this + "Something went wrong")
//     }
//     if(!Array.isArray(args)){
//         throw new Error("createList called on non-object")
//     }
    
//     context.fn = this;
//     context.fn(...args)
// }
 
// purChaseCar.myapply(car1, "£", 50000000)



// bind methods for polyfill


// Function.Prototype.myBind = function(context={}, ...args){
//     if(typeof this !== "function"){
//         throw new Error(this + "Something went wrong")
//     }
    
    
//     context.fn = this;
//     return function(...newArgs){
//         return context.fn(...args,...newArgs)
    
//     }
    

// }
 
// const newFunc= purChaseCar.myBind(car1, "£")
// console.log(newFunc(5000000))













// create polyfile for map,filter,reduce



// Array.prototype.mymap = function(cb){
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

//  const newArr = arr.mymap((num)=>{
//      return num * 2
// })
// console.log(newArr);



// Array.prototype.myfilter = function(cb){
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

//  const morethan3 = arr.myfilter((    num)=>{
//     return num > 3
// })
// console.log(morethan3)




// polyfill for Reduce

// Array.prototype.myReduce = function(cb, initialValue){
//     var accumulator = initialValue;
//     for(let i=0; i<this.length; i++){
//         accumulator = accumulator ? cb(accumulator, this[i], i ,this) : this[i];
//     }
//     return accumulator;


// }


//  const arr = [1,2,9,6]

// const result = arr.myReduce((acc, curr)=>{
//     return acc + curr
// },0)

// console.log(result);




//  setInterval every time is expired keep on running untill browase close

// console.log("script start")
// setInterval(()=>{
//     console.log("inside setinterval")
// },2000)
// console.log("script end")
