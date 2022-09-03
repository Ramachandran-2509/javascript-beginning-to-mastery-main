// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforebegin", "<li>Teach Students </li>");
todoList.insertAdjacentHTML("beforebegin", "<li>learn JavaScript </li>");



// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach";
// const todoList1 = document.querySelector(".todo-list");
// todoList1.append(newTodoItem);
// console.log(todoList1);