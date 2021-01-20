//Selectors
const button = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

//Event Listeners and functions
button.addEventListener('click', (event) => {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const listItem = document.createElement("li");
    listItem.innerHTML = todoInput.value;
    listItem.classList.add("list-item");
    todoDiv.appendChild(listItem);

    const compeletButton = document.createElement("button");
    compeletButton.innerHTML = '<i class="fas fa-check"></i>';
    compeletButton.classList.add('compelet-btn');
    todoDiv.appendChild(compeletButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";

    trashButton.addEventListener('click', () => {
        todoDiv.classList.add('bakete');
        todoDiv.addEventListener('transitionend', () => {
                todoDiv.remove();
            })
            //todoList.removeChild(todoDiv);
    })
    compeletButton.addEventListener('click', () => {
        todoDiv.classList.toggle('compeletox');
    })


})

filterOption.addEventListener('click', filterTodo);

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('compeletox')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('compeletox')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}