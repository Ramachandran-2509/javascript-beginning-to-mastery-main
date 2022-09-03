// document.createElement()
// append
// prepend
// remove


// const newTodoItem = document.createElement("li");
// const newTodoItem1 = document.createElement("li");
    
    // newTodoItem.className = "todo-item";
    // newTodoItem.id = "tod01";
    // newTodoItem.textContent = "Learn JavaScript";


//     newTodoItem.setAttribute("class", "todo-item");
//     newTodoItem.setAttribute("id", "todo1");
//     newTodoItem.innerHTML="Learn JavaScript";
    //   console.log(newTodoItem)
   

// const newTodoItemText = document.createTextNode("Teach students");
// // const newTodoItemText1 = document.createTextNode("Teach students");
// console.log(newTodoItemText);
// newTodoItem.textContent = "Teach students";
// console.log(newTodoItemText);
// newTodoItem1.innerHTML = "Learn JavaScript";
// const todoList = document.querySelector(".todo-list");

// todoList.append(newTodoItem);
// todoList.append(newTodoItem1);
// 
//  console.log(todoList);
//  console.log(newTodoItem1);
// const todo1 = document.querySelector('.todo-list li[id="tod01"]');
//  console.log(todo1);
// todo1.remove();
// console.log(todo1)

// before 
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
todoList.prepand(newTodoItem);
console.log(todoList);