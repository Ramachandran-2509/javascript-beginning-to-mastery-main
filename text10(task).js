// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// const todoList = document.querySelector(".todo-list");


// todoForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//   const newTodoText = todoInput.value;
//   const newLi = document.createElement("li");
//   const newLiInnerHtml = `
//         <span class="text">${newTodoText}</span>
//         <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//         </div>`;
//   newLi.innerHTML = newLiInnerHtml;
//   todoList.append(newLi);
//   todoInput.value = "";
// });

// todoList.addEventListener("click", (e) => {
//   // check if user clicked on done button
//   if (e.target.classList.contains("remove")) {
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
//   if (e.target.classList.contains("done")) {
//     const liSpan = e.target.parentNode.parentNode;
//     liSpan.style.textDecoration = "line-through";
//   }
  
// });
   
   
   
   const button = document.querySelector("button")
   const body = document.body;
   const currentColor = document.querySelector("current-color")
   
   
   function randomColorGenerator(){
   const red = Math.floor(Math.random()*256)
   const blue = Math.floor(Math.random()*256)
   const green = Math.floor(Math.random()*256)
   const randomColor = `rgb(${red},${blue},${green}`
   return randomColor;
   
  
   }
   
   
   button.addEventListener("click", ()=>{
   	const randomColor = randomColorGenerator();
		body.style.background = randomColor
    currentColor.textContent = randomColor
   })
   
   
   
   
//  const mainButton = document.querySelector("button");
//   const body = document.body;
  
//      const k = setInterval(() => {
//      const red = Math.floor(Math.random() * 256);
//      const green = Math.floor(Math.random() * 256);
//      const blue = Math.floor(Math.random() * 256);
//      const rgb = `rgb(${red}, ${green}, ${blue})`
//      body.style.backgroundColor = rgb;
// })

// mainButton.addEventListener("submit",()=>{
//   clearInterval(k)
//   button.textContent = body.style.background
// })