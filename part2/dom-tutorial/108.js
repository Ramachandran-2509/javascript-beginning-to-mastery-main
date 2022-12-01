// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems));
const navItems1 = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems1[0]);



const arr=[1,2,3,4,5,5,2,1,3,4]

function removeDuplicates(arr){
    // const arr1=[];
    // for(let i=0; i<arr.length; i++){
    //     if(arr1.indexOf(arr[i])===-1){
    //         arr1.push(arr[i])
    //     }

    // }
    // return arr1;

    // var unique = arr.reduce((acc, curr)=>{
    //     if(!acc.includes(curr))
    //         acc.push(curr)
    //         return acc;
       
        
    // },[])
    // return unique

}

console.log(removeDuplicates(arr))