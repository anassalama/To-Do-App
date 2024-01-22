const form = document.getElementById('addForm');
const list = document.getElementById('listTodo');
const submit = document.getElementById('submitBtn');

let editItem = null;

window.onload = () => {
    form.addEventListener("submit", addItem);
    list.addEventListener("click", removeItem);
}

addItem = (e) => {
    e.preventDefault();
 
    if (submit.value != "submit") {
        editItem.target.parentNode.childNodes[0].data = document.getElementById("todo").value;
 
        submit.value = "submit";
        submit.innerHTML = "Add";
        document.getElementById("todo").value = "";

        return false;
    }
 
    let newItem = document.getElementById("todo").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("todo").value = "";
 
    let todoItem = document.createElement("div");
 
    let deleteButton = document.createElement("button");
    deleteButton.className = 'delete';
 
    deleteButton.appendChild(document.createTextNode("Delete"));
 
    let editButton = document.createElement("button");
    editButton.className = 'edit';
 
    editButton.appendChild(document.createTextNode("Edit"));
 
    todoItem.appendChild(document.createTextNode(newItem));
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);
 
    list.appendChild(todoItem);
}

removeItem = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            list.removeChild(li);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("todo").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "edit";
        submit.innerHTML = "Edit"
        editItem = e;
    }
}