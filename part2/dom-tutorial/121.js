// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    setTimeout(function(){
        console.log("value of this")
    },3000);
    
    console.log(this);
}); 