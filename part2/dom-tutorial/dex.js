// const body =  document.body
// const button = document.querySelector("button")

// const intervalID = setInterval(() => {
// 	const red = Math.floor(Math.random() * 126)
//   const green = Math.floor(Math.random() * 126)
//   const blue = Math.floor(Math.random() * 126)
//   const rgb = `rgb(${red}, ${green}, ${blue})`;
//  body.style.background = rgb; 
  
// },1000)

// button.addEventListener("click", () => {
//     clearInterval(intervalID)
//     button.textContent = body.style.background;
// });





function changeClr() {
    var para = document.querySelector("p")
    para.style.color = "red"
  }
  function clss() {
    var para = document.querySelector("p.comp")
    para.style.background = "lightgreen"
  }
  function fun() {
    var para = document.querySelector("#intro")
    para.innerHTML =
      "I love Front end developer next month i will get my job defentely"
  }
  
  function divFun() {
    var para = document.querySelector("div > p")
    para.style.background = "lightblue"
  }
  
  function headerfun() {
    var para = document.querySelector("h5, h4")
    para.style.color = "blue"
  }
  
  function linkFun() {
    document.querySelector("a[target]").style.border = "10px solid blue"
  }
  
  function linFun() {
    var para = document.querySelector(".main")
    para.innerHTML = "React Js"
  }


