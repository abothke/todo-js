const addButton = document.querySelector("#todo-add");
const todoCheckbox = document.querySelector("#checkbox")
const deleteButton = document.querySelector("#deleteMe")
const alertMsg = document.querySelector("#alert")
let todoArray = []

addButton.addEventListener('click', () => {
    const todoInput = document.querySelector('#todo-input').value;
    const todoItems = document.querySelector('#todo-items');
    todoArray.push(todoInput)
    const uniqueID = Math.floor(Math.random() * 99999)
    const todoItem = document.createElement('div')
    todoItem.classList.add("todo-item")
    todoItem.id = `todo-item-${uniqueID}`
    todoItem.innerHTML =`
    <div id="todo-${uniqueID}" class="todo-content">
    <input type="checkbox" id="checkbox-${uniqueID}">
    <h2>${todoInput}</h2>
    </div>
    <div id="deleteMe-${uniqueID}" class="deleteMe"> X </div>
    `
    if (todoInput.length >= 3){
    alertMsg.textContent = ""; // Löscht die Fehlermeldung, wenn vorhanden
    document.querySelector('#todo-input').value = ""; // Löscht den Text aus dem Inputfeld wenn ein Todo hinzugefügt wurde
    todoItems.appendChild(todoItem);
    document.querySelector(`#checkbox-${uniqueID}`).addEventListener("change", () => {
        document.querySelector("h2").style.textDecoration = "line-through";
    }
    )
    document.querySelector(`#checkbox-${uniqueID}`).addEventListener("change", (el) => {
        el.target.checked = true;
    })
    document.querySelector(`#deleteMe-${uniqueID}`).addEventListener("click", () =>{
        if (document.querySelector(`#checkbox-${uniqueID}`).checked == true){
        document.querySelector(`#todo-item-${uniqueID}`).innerHTML = "";
        todoArray.splice(todoArray.indexOf(todoInput), 1) // Löscht das Todo aus dem Array
    } else {
        alert("Ist das Todo auch wirklich erledigt?")
    }
    })
} else {
    alertMsg.textContent = "Bitte mindestens 3 Zeichen eingeben"
}
})

