
// promise

// const bucket = ["coffee", "chips", "salt", "vegetables", "rice"];
// const firedRice = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetables") &&
//     bucket.includes("salt") &&
//     bucket.includes("rice")
//   ) {
//     resolve( "friedRice" );
//   } else {
//     reject(new Error("Something went wrong"));
//   }
// });

// firedRice
//   .then((value) => {
//     console.log("eat",value);
//   })
//   .catch(() => {
//     console.log("error");
//   });





// using function promise using and chaining promise

//   function friedRicePromise(){
//     const bucket = ["coffee", "chips", "salt", "vegetables", "rice"];
//     return new Promise((resolve, reject)=>{
//         if (
//             bucket.includes("vegetables") &&
//             bucket.includes("salt") &&
//             bucket.includes("rice")
//           ) {
//             resolve( "friedRice" );
//           } else {
//             reject(new Error("Something went wrong"));
//           }
//     })
//   }

//   friedRicePromise()
//   .then((value) => {
//     console.log(value);
//     value += "bracket"
//     return value
//   }).then((value)=>{
//     console.log(value)
//     value += "bravo"
//     return value
//   }).then((value)=>{
//     console.log(value)
//   })

//   .catch(() => {
//     console.log("error");
//   });




// function using setTimeout

//   function friedRicePromise(){
//   const bucket = ["coffee", "chips", "salt", "vegetables", "rice"];
//     return new Promise((resolve, reject)=>{
//         const value= false;
//         setTimeout(()=>{
//             if(value){
//                 resolve("everything going good")
//             }else{
//                 reject("error occur")
//             }
//         },2000)
//     })
//   }

//   friedRicePromise()
//   .then((value) => {
//     console.log(value);
//     return value
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//  function changeText(element, text, color, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text
//                 element.style.color = color
//                 resolve()
//             }
//             else{
//                 reject("something went wrong")
//             }
//         },time)
        
//     })
//  } 

// changeText(heading1, "one", "red", 1000)
//   .then(()=>changeText(heading2, "two", "purple", 1000))
//   .then(()=>changeText(heading3, "three", "green", 1000))
//   .then(()=>changeText(heading4, "four", "orange", 1000))
//   .then(()=>changeText(heading5, "five", "aqua", 1000))
//   .then(()=>changeText(heading6, "six", "blue", 1000))
//   .then(()=>changeText(heading7, "seven", "grey", 1000))
//   .then(()=>changeText(heading8, "eight", "violet", 1000))
//   .then(()=>changeText(heading9, "nine", "brown", 1000))
//   .then(()=>changeText(heading10, "ten", "yellow", 1000))
// .then(()=> document.write("Happy new year"))
//    .catch((error)=>{
//       alert(error);
//   })



// async/Await



const URL = "https://jsonplaceholder.typicode.com/posts";





async function getdata(){
    const response = await fetch(URL);
    const data  = await response.json()
    console.log(data)
}

