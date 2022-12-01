const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.parentNode;
    liSpan.style.textDecoration = "line-through";
  }
  
});

// previousElementSibling
// parentNode

// const todoList1 = document.querySelector(".todo-list");
// console.log(todoList1.children);



// todoList.addEventListener("click", (e) => {
//   // check if user clicked on done button
  
//   if (e.target.classList.contains("done")) {
//     const liSpan = e.target.parentNode.parentNode;
//     liSpan.style.textDecoration = "line-through";
//   }
//   if (e.target.classList.contains("remove")) {
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
// });



// const input = document.querySelector(".form-todo");
// const test  = document.querySelector("input[type='text']");
// const todoList1=document.querySelector(".todo-list");


// input.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const newTodoText1 = test.value;
//   const todo = document.createElement("li");
//   const newInner = `<span class="text">${newTodoText1}</span>
//   <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//   </div>`;

//   todo.innerHTML=newInner;
//   todoList1.append(todo)
//   todo.value = "";

// })


// todoList1.addEventListener("click", (e)=>{
//   if(e.target.classList.contains("remove")){
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
//   if (e.target.classList.contains("done")) {
//     const liSpan = e.target.parentNode.parentNode;
//     liSpan.style.textDecoration = "line-through";
//   }
// })