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
    <input type="checkbox" id="checkbox-${uniqueID}" class="checkbox">
    <h2 id="h2-${uniqueID}" class="h2-todo">${todoInput}</h2>
    </div>
    <div id="deleteMe-${uniqueID}" class="deleteMe">❎</div>
    `
    if (todoInput.length >= 3){
    alertMsg.textContent = ""; // Löscht die Fehlermeldung, wenn vorhanden
    document.querySelector('#todo-input').value = ""; // Löscht den Text aus dem Inputfeld wenn ein Todo hinzugefügt wurde
    todoItems.appendChild(todoItem);
    document.querySelector(`#checkbox-${uniqueID}`).addEventListener("change", () => {
        document.querySelector(`#h2-${uniqueID}`).style.textDecoration = "line-through";
    }
    )
    document.querySelector(`#checkbox-${uniqueID}`).addEventListener("change", (el) => {
        el.target.checked = true;
    })
    document.querySelector(`#deleteMe-${uniqueID}`).addEventListener("click", () =>{
        if (document.querySelector(`#checkbox-${uniqueID}`).checked == true){
        document.querySelector(`#todo-item-${uniqueID}`).innerHTML = ""; // Löscht das Todo aus dem HTML
        document.querySelector(`#todo-item-${uniqueID}`).style.display = "none"; // Stellt das Todo auf "none" um es aus dem DOM zu entfernen
        todoArray.splice(todoArray.indexOf(todoInput), 1) // Löscht das Todo aus dem Array
    } else {
        alert("Das kann doch auch bis morgen warten!")
    }
    })
} else {
    alertMsg.textContent = "3 Zeichen sind eigentlich schon zu viel für ein Todo! 🥱 Aber bitte mindestens 3 Zeichen eingeben."
}
})