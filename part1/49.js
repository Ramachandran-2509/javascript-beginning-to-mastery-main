// lexical scope 
// const myVar = "value1";

// function myApp(){
    

//     function myFunc(){
//         //  const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();
//     }

    
//     console.log(myVar);
//     myFunc();
// }

// myApp();



// lexical scope another example


// const myVar1 = "Ram";

function myApp1(){
    

    function myFunc1(){
         const myVar1 = "sunshine";
         console.log("inside myFunc1", myVar1);
        const myFunc3 = () =>{
            const myVar1 = "sun";
            console.log("inside myFunc2", myVar1);
        }
        myFunc3();
    }

    const myVar1 = "selvam";
    console.log(myVar1);
    myFunc1();
}
myApp1();