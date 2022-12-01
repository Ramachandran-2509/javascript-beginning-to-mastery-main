const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);
// step1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

xhr.onload = function(){
    const response = xhr.response;
        // console.log(typeof response);
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();






// xhr.onload = function(){
//     if(xhr.status>=200 && xhr.status< 300){
//         const data = JSon.parse(xhr.response)
//         console.log(data);
//         const id=data[3].id
//         const url = `${URL}/${id}`
//         const xhr2 = new XMLHttpRequest();
//         xhr2.open("GET",url);
//         xhr2.onload = function(){
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//     }
//     else{
//         console.log("something went wrong")
//     }

//     xhr.onerror = function(){
//         console.log("network error")
//     }

//     xhr.send();

// }

// function result(method, URL){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,URL);
//         xhr.onload = function(){
//             if(xhr.status >=200 && xhr.status<300){
//                 const data = JSON.parse(xhr.response);
//                 resolve(data);
//             }else{
//                 reject(new Error("Something went wrong"));
//             }
//         }
//         xhr.onerror = function(){
//             console.log("network error");
//         }
//         xhr.send();

//     })
// }

// result("GET",URL).then((data)=>{
//     console.log(data)
//     const id = data[3].id;
// }).then((id)=>{
//     const url = `${URL}/${id}`;
//     return result("GET",url);
// }).then((data)=>{
//     const data = JSON.parse(data);
//     console.log(data);

// }).catch((error)=>{
//     console.log(error);
// })





// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
//     if(xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`
//         console.log(URL2);
//         xhr2.open("GET", URL2);
//         xhr2.onload = () => {
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//     }
//    else{
//        console.log("something went wrong");
//    }
// }

// xhr.onerror = () => {
//     console.log("network error");
// }
// xhr.send();