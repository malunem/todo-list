let body = document.body;
let title = document.querySelector('h2');

let sample_ToDos = ['To-Do 1', 'To-Do 2', 'To-Do 3'];

updateTaskList(sample_ToDos);

function updateTaskList(toDos) {
    
    let task_list = document.querySelector('#task-list');
    
    toDos.forEach((toDo, index) => {
        
        let new_ToDo = document.createElement('div');
        new_ToDo.classList.add('form-check', 'mb-3')

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', index)
        input.classList.add('form-check-input');

        let label = document.createElement('label');
        label.setAttribute('for', index)
        label.classList.add('form-check-label');

        let line = document.createElement('hr');

        label.innerHTML = toDo;
        new_ToDo.appendChild(input)
        new_ToDo.appendChild(label)
        new_ToDo.appendChild(line)
        task_list.appendChild(new_ToDo);
    });
}