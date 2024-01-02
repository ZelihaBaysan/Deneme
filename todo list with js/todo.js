//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo")

// alerts
const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");

//events
todoButton.addEventListener("click", addTodo);


//functions
function addTodo(e) {
    e.preventDefault();

    const isEmpty = str => !str.trim().length;
    
    if(isEmpty(todoInput.value)){
        
    }

    else{

    }

    // create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    console.log(todoDiv);

    // check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check-circle'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //create todo list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);


    // trash mark button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);
    
    //clear todo input value
    todoInput.value = "";

}





