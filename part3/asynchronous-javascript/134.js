// Promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve("friedRice");
    }else{
        reject("could not do it");
    }
})
 // produce 



// consume 
 // how to consume 

friedRicePromise.then(
   // jab promise resolve hoga 
    (eat)=>{
    console.log("lets eat ", eat);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)

// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")


let i;

// for(i=0; i<3; i++){
//     const log=()=>{
//         console.log(i)
//     }
//     setTimeout(log, 1000    )
// }

for(i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}   


    // const str='hello world'
    // /* o/p = 'alleh dlrow'
    //  */
    // function resultString(str){

    // const fill=str.split(/[ .]+/)
    // console.log(fill)

    // let filterResult='';
    // let cache=''

    // for(let i=0;i<fill.length;i++){
    //   for(let j=0; j<fill[i].length; j++){
    //     cache = fill[i][j]+cache;
    //   }
    //   filterResult += ' '+  cache
    //   cache=''
    // }
    // return filterResult

    // } 
    // console.log(resultString("hello Ram"))