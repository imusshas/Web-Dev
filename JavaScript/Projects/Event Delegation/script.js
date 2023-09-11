const todoForm = document.querySelector(".to-do-form");
const todoTextInput = document.querySelector(".to-do-form input[type='text']");
let todoList = document.querySelector(".to-do-list");
console.log(todoList);

todoForm.addEventListener("submit", (eventObject) => {
    eventObject.preventDefault();
    const newTodoText = todoTextInput.value;
    const newLi = document.createElement("li");
    
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
        <div class="to-do-btns">
            <button class="to-do-btn done">Done</button>
            <button class="to-do-btn remove">Remove</button>
        </div>`
    
    newLi.innerHTML = newLiInnerHTML;
    console.log(newLi);
    todoList.append(newLi);
    todoTextInput.value = "";

});

todoList.addEventListener("click", (eventObject) => {
    const curentLi = eventObject.target.classList;
    const liSpan = eventObject.target.parentNode.previousElementSibling;

    if(curentLi.contains("done")) {
        console.log("You're done");
        liSpan.style.textDecoration = "line-through";
    }

    if(curentLi.contains("remove")) {
        liSpan.parentNode.remove();
    }
});