const form = document.getElementById('form')
const input = document.getElementById('input');
const completeAllTasks = document.getElementById('complete-all-tasks')
const clearCompleted = document.getElementById('clear-completed')
const inputContainer = document.getElementById('input-container')
const taskLeft = document.getElementById('task-left')
const all = document.getElementById('all')
const uncompleted = document.getElementById('uncompleted')
const completed = document.getElementById('completed')


function insertTodos(e){
    e.preventDefault();
    addTodos()
    input.value = "";
}


function removetodo(todoEl){
    todoEl.remove();
}


function addTodos(){
    const todosVal = input.value;

    if(todosVal){
        const todoEl = document.createElement('div');
        todoEl.classList.add("todos");
        todoEl.innerHTML = `
        ${todosVal}
        <span class="remove">
        <i class="far fa-times-circle "></i>
        </span>
        `;        

        inputContainer.append(todoEl);   
        const todos = document.querySelector('.todos');
        const removeTodoBtn = todoEl.querySelector('.remove'); 
        console.log(removeTodoBtn)  
       
        removeTodoBtn.addEventListener('click', () => removetodo(todoEl) );
        todoEl.addEventListener('click',() => {
            todoEl.classList.toggle('completed');
            updateLs();
        });
        
    }
    updateLs()
}



function updateLs(){
    const todosEl = document.querySelectorAll('.todos');
    const todos =[];

    todosEl.forEach((todosEl) => {
        todos.push({
            text: todosEl.innerText,
            completed : todosEl.classList.contains('completed')
        });
    });
    console.log("normal" , todos);
    localStorage.setItem("todos", JSON.stringify(todos));

    console.log(localStorage)
}






form.addEventListener('submit', insertTodos);
