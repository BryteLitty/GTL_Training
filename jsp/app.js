// DOM Manipulation -------  1. selectors 2. event listeners 3. functions

// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
// event listeners
todoButton.addEventListener('click', addTodo);
todolist.addEventListener("click", deleteCheck);
// functions
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");

    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);


    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");

    todoDiv.appendChild(completeButton);

    // check button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todolist.appendChild(todoDiv);
    
    todoInput.value = "";

}
// for delete button
function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}