const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
//refresh 하지 않기 위해 deaultevent prevent
const TODOS_KEY = "todos";
let toDos = []; // let으로 업데이트 가능하게 만듬

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}




function paintTodo(newTodoobj) {
    const li = document.createElement("li");
    li.id = newTodoobj.id;
    const span = document.createElement("span");
    span.innerText = newTodoobj.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);
    todoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoobj = {
        text: newTodo,
        id: Date.now(),//Date.now로 random seed
    }
    toDos.push(newTodoobj); //empty todoInput.value
     
    paintTodo(newTodoobj);
    saveTodos();
}
todoForm.addEventListener("submit", handleToDoSubmit);



const savedtoDos = localStorage.getItem(TODOS_KEY);

if (savedtoDos!==null) {
    const parsedToDos = JSON.parse(savedtoDos);
    toDos = parsedToDos;
    toDos.forEach(paintTodo);
}