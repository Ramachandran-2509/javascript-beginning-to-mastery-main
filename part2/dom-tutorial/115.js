// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforebegin", "<li>Teach Students </li>");
todoList.insertAdjacentHTML("beforebegin", "<li>learn JavaScript </li>");