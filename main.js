let body = document.body;
let title = document.querySelector('h2');

let toDos = ['Add your first task!'];

updateToDoList(toDos);

function createNewToDo(evt) {
    evt.preventDefault();
    
    let input = document.querySelector('#new-todo').value.trim();

    if (!input) return;

    toDos.push(input);
    document.querySelector('#new-todo').value = '';

    updateToDoList(toDos);

}

function updateToDoList(toDos) {
    
    let task_list = document.querySelector('#task-list');
    
    while (task_list.firstChild) {
        task_list.removeChild(task_list.firstChild);
    } 
    
    toDos.forEach((toDo, index) => {
        
        task_list.appendChild(renderToDo(toDo, index));
    });
}

function renderToDo(toDo, index) {
    
    let template = document.querySelector('#toDo-template');
    
    let template_instance = document.importNode(template.content, true);

    let input = template_instance.querySelector('input');
    input.setAttribute('id', index)

    let label = template_instance.querySelector('label');
    label.setAttribute('for', index)

    label.innerHTML = toDo;

    return template_instance;
}

function removeToDo(evt) {
    let clickedToDo = evt.target.previousElementSibling.innerHTML;
    
    toDos = toDos.filter((toDo) => clickedToDo != toDo);
    
    updateToDoList(toDos);
}