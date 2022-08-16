function func(){
    let counter = 0;
    return function(){
        if(counter <= 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
// myFunc();


// function result(){
//     let cunt = 0
//     return function(){
//         if(cunt < 1){
//             console.log("i am happy to seee you");
//             cunt++;
//         }
//         else{
//             console.log("you done good job")
//         }

//     }
// }

// const res = result()
// res()
// res()