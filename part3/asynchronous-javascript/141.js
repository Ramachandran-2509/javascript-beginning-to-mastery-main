const URL = "https://jsonplaceholder.typicode.com/posts";



const xhr = new XMLHttpRequest();

xhr.open("GET", URL)

xhr.onload=function(){
    if(xhr.status >=200 && xhr.status <300){
        const data= JSON.parse(xhr.response);
        console.log(data)
        const id= data[3].id;
        const URL2 = `${URL}/${id}`

        const xhr2= new XMLHttpRequest();
        xhr2.open("GET", URL2)
        xhr2.onload= function(){
            const newData=JSON.parse(xhr2.response)
            console.log(newData)
        }

        xhr2.send()


    }else{
        console.log("something went wrong")
    }

    xhr.onerror=()=>{
        console.log("Network Error")
    }
    


}
xhr.send()