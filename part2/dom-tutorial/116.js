// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
li2.textContent = "new list 2";
ul.append(li);
ul.prepend(li2);
