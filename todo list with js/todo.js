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
todoList.addEventListener("click", deleteCheck);


//functions
function addTodo(e) {
    e.preventDefault();

    const isEmpty = str => !str.trim().length;

    if (isEmpty(todoInput.value)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 1000);
        //clear todo input value
        todoInput.value = "";
    }

    else {
        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
        }, 1000);

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


}

function deleteCheck(e){
    const item = e.target;

    //delete todo
    if(item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    else{
        
    }
}




