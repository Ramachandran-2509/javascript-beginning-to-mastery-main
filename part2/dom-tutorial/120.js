// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) 
const btn = document.querySelector(".btn-headline");
// method --- addEventListener
function clickMe(){
    console.log("hey everything going good!!!!!");
}
btn.addEventListener("click", function(){
    console.log("hey everything going good so far !!!!!");
    
})
    


btn.addEventListener("click", ()=>{
    console.log("arrow function !!!")
});



btn.addEventListener("click", function(){
    console.log("hey everything going good so far !!!!!");
    setTimeout(function(){
        console.log("print after 2 seconds happy weekend !!!!!");
    }   , 3000);
});
    

