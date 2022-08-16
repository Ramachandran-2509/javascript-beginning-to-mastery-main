const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000))
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "five", "aqua", 1000))
  .then(()=>changeText(heading6, "six", "blue", 1000))
  .then(()=>changeText(heading7, "seven", "grey", 1000))
  .then(()=>changeText(heading8, "eight", "violet", 1000))
  .then(()=>changeText(heading9, "nine", "brown", 1000))
  .then(()=>changeText(heading10, "ten", "yellow", 1000))
  // .then(()=> document.write("Happy new year"))
   .catch((error)=>{
      alert(error);
  })




 