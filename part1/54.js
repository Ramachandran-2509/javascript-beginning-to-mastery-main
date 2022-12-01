// callback functions 

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("Ram");
}


myFunc(myFunc2);



function myFunc1(name){
    console.log("inside myFunc1");
    console.log(`your name is ${name}`)
}

function res(callback){
    console.log("Hello there i am a func and i can")
    callback("ram")
}

res(myFunc1);
