const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr  = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something Went wrong"));
            }
        }

        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        console.log(data)
        return data;
    })
    .then(data=>{
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })




    function sum(a,b){
        console.log(`Calculating the sum for ${a} and ${b}`)
      return a+b;
    }
    
    

 function result(sum){
  let cache = {}
  
  return function(a, b){
   const key = a +' '+ b
   console.log(key)
  if(cache[key]){
    // return cache[key]
    console.log(cache[key])
  }else{
    cache[key] = sum(a,b)
    return cache[key]
  }
  }
 
} 


    const res = result(sum)
    console.log(res(1,2))