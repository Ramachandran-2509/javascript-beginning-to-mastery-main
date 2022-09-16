
// synchronous and asynchronous
// synchronous code single thread

// console.log("Script start")

// for(let i=0; i<10; i++){
//     console.log(i)
// }
// console.log("script end")




// asynchronous code

// console.log("Script start")
// setTimeout(()=>{
//     console.log("inside settimeout")
// },2000)
// console.log("script end")







//  destructuring in array and object 

// const domain = "guvi"
// const page = "code-kata"


// const url = `https://${domain}.in/${page}`
// console.log(url)

// const [name , age = 20 ,group = "b25b"] = ["Ram",null, 17]
// console.log(name ,age,group)

// function getNumber(){
//   return [1,2,3,4,5]
// }
// const[first, second,...k] = getNumber()
// console.log(first + second, k)


function fullURL({domain, page, pagenumber}){
    return `https://${domain}.in/${page}/${pagenumber}`;
    
  }
  // const k = {domain: "github", page:"user-page"}
  
  const google = {domain: "github", page:"search", pagenumber :51}
   
  
  // console.log(fullURL(k))
  // console.log(fullURL(google))