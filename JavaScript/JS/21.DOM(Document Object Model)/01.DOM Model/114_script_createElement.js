const nextTodoItem = document.createElement("li");

// const newTodoItemText = document.createTextNode("Next Todo");
// newTodoItem.append(newTodoItemText);

const todoList = document.querySelector(".to-do-list");
todoList.append(nextTodoItem);


nextTodoItem.innerText = "Next Todo";

console.log(nextTodoItem);

const prevTodoItem = document.createElement("li");
prevTodoItem.innerText = "Prev Todo";
todoList.prepend(prevTodoItem);

console.log(prevTodoItem);

const todo1 = todoList.children[1];
todo1.remove();
console.log(todo1.innerHTML);

const todoListHeading = document.createElement("h3");
todoListHeading.innerText = "To Do List";

todoList.before(todoListHeading);

const todoListFooter = document.createElement("span");
todoListFooter.innerText = "Achieve Your Goal Today";

todoList.after(todoListFooter);


todoList.insertAdjacentHTML("beforeend", "<li>Adjacent</li>");