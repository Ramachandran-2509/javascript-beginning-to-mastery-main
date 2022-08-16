
// console.log("script start !!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 10; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")



const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach(function (button){
//     button.addEventListener("click", function(){
//     button.style.backgroundColor = "blue";
//     button.style.color = "#333";
// })
// })


allButtons.forEach(function (button){
button.addEventListener("click", function(){
    button.innerHTML = "Clicked";
    button.style.backgroundColor = "Aqua";
    button.style.color = "#333";
})
})




// allButtons.forEach(button =>{
//     button.addEventListener("click", (e)=>{
//         // console.log(e.target);
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     })
// })
