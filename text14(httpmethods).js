// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);

// xhr.onreadystatechange = function(){
// console.log(xhr.readyState);
//    if(xhr.readyState === 4){
//    console.log(xhr)
// const response = xhr.response;
//        const data = JSON.parse(xhr.response);
//        console.log(data);
//    }
// }

// xhr.onload = function(){

//     const data = JSON.parse(xhr.response);
//     console.log(data);

// }

// xhr.send()

// method 2:

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);

// xhr.onload = function(){
//     if(xhr.status >= 200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id

//         const xhr1 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`
//         xhr1.open("GET", URL2)

//         xhr1.onload = ()=>{
//             const data1 = JSON.parse(xhr1.response);
//             console.log(data1);
//         }
//         xhr1.send()

//     }
//     else{
//         console.log("something went wrong");
//     }

//     xhr.onerror = () => {
//         console.log("network error");
//     }

// }

// xhr.send()

// method 3 (using promise)

// const URL = "https://jsonplaceholder.typicode.com/posts";
// function getpromise(method, url){
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(xhr.status >= 200 && xhr.status <300){
//                 resolve(xhr.response);
//             }
//             else{
//                 reject("something went wrong")
//             }
//         }
//         xhr.send()

//         xhr.onerror = ()=>{
//             console.log("network Error")
//         }

//     })
// }

// getpromise("GET", URL)
// .then((response)=>{
//         const data = JSON.parse(response);
//         console.log(data)
//         return data

// }).then((data)=>{
//     const id= data[3].id;
//     return id
// }).then(id=>{
//     const URL2 = `${URL}/${id}`
//     return getpromise("GET", URL2)
// }).then((newresponse)=>{
//     const data1 = JSON.parse(newresponse);
//     console.log(data1)

// }).catch(()=> console.log("Error"))



// fetch

// const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong")
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside error catch");
//     console.log(error);
//   });



  

// async/Await method used 
// method 1
// const URL = "https://jsonplaceholder.typicode.com/posts";


// async function getdata(){
//     const response = await fetch(URL);
//     const data  = await response.json()
//     console.log(data)
// }
// getdata()


// method 2 

const URL = "https://jsonplaceholder.typicode.com/posts";


// async function getdata(){
//     const response = await fetch(URL);
//     const data  = await response.json()
//     return data
// }

// getdata().then((value)=>{
//     console.log(value)
// })


// method 3 using arrow function

// const getpost = async() =>{
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//      const data  = await response.json()
//      return data
//  }  

//  getpost().then((value)=>{
//     console.log(value)
// })






