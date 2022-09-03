const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})




// const body1 = document.body;
// const button1 = document.querySelector("button");

// const intervalID = setInterval(() => {
//     const red = Math.floor(Math.random() *256)
//     const green = Math.floor(Math.random() *256)
//     const blue = Math.floor(Math.random() *256)
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     body1.style.backgroundColor = rgb;

// })

// button1.addEventListener("click", () => {
//     clearInterval(intervalID);
//     button1.textContent = body1.style.background;
// })
