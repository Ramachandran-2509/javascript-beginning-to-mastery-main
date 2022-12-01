// function returning promise

function ricePromise(){
  const bucket = ['coffee', 'chips','vegetables','salts','rice'];
  return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedRice"});
    }else{
        reject("could not do it");
    }
  })
}


ricePromise().then(
  // jab promise resolve hoga 
  (myFriedRice)=>{
  console.log("lets eat ", myFriedRice);
  }
  ).catch(
  (error)=>{
      console.log(error)
  })