const addButton = document.querySelector('#todo-add');
const todoCheckbox = document.querySelector("#checkbox")
const deleteButton = 
let todoArray = []

addButton.addEventListener('click', () => {
    const todoInput = document.querySelector('#todo-input').value;
    const todoItems = document.querySelector('#todo-items');
    todoArray.push(todoInput)
    const todoItem = document.createElement('div')
    todoItem.classList.add("todo-item")
    todoItem.innerHTML =`
    <div id="todo-content" class="todo-content">
    <input type="checkbox" id="checkbox">
    <h2>${todoInput}</h2>
    </div>
    <div id="deleteMe"> X </div>

    `
    todoItems.appendChild(todoItem);
})

