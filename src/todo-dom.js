import * as logic from "./todo-logic";

export function createDomProject(project, projectArray) {
    let projectContainer = document.querySelector('.project-container');
    
    let projectDiv = document.createElement('div');
    let projectName = document.createElement('p');
    let removeBtn = document.createElement('button');

    projectName.textContent = project.name;
    removeBtn.textContent = 'x';

    // set class for styling
    projectDiv.className = 'project';

    // event listeners for each unique project
    removeBtn.addEventListener('click', () => {
        logic.deleteProject(project, projectArray);
        projectDiv.remove();
    }); 

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(removeBtn);
    
    projectContainer.appendChild(projectDiv); 
}

export function createDomTodo(todo, project) {
    let todoContainer = document.querySelector('.todo-container');
    
    let todoDiv = document.createElement('div');
    let checkbox = document.createElement('input');
    let infoDiv = document.createElement('div');
    let title = document.createElement('h4');
    let dueDate = document.createElement('p');
    let buttonDiv = document.createElement('div');
    let detailBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox');

    title.textContent = todo.title;
    dueDate.textContent = todo.dueDate;

    detailBtn.textContent = 'Details';
    removeBtn.textContent = 'x';

    // set class for styling
    todoDiv.className = 'todo';
    checkbox.className = 'checkbox';
    infoDiv.className = 'info-div';
    buttonDiv.className = 'button-div';

    // event listeners for each unique todos
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            todo.status = 'Completed';
            todo.checkmark = 'checked';
        } else {
            todo.status = 'Incomplete';
            todo.checkmark = 'unchecked';
        }
    })
    
    detailBtn.addEventListener('click', () => {
        document.querySelector('.detail-container > div')
        .innerHTML = '';
        createDomTodoDetails(todo);
    })

    removeBtn.addEventListener('click', () => {
        logic.deleteTodoFromProject(todo, project);
        todoDiv.remove();
    })

    infoDiv.appendChild(title);
    infoDiv.appendChild(dueDate);
    buttonDiv.appendChild(detailBtn);
    buttonDiv.appendChild(removeBtn);
    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(infoDiv);
    todoDiv.appendChild(buttonDiv);

    todoContainer.appendChild(todoDiv);
}

export function createDomTodoDetails(todo) {
    let detailDiv = document.querySelector('.detail-container > div');

    let title = document.createElement('h4');
    let description = document.createElement('p');
    let dueDate = document.createElement('p');
    let priority = document.createElement('p');
    let notes = document.createElement('p');
    let status = document.createElement('p');
    let editBtn = document.createElement('button');

    title.textContent = todo.title;
    description.innerHTML = `<strong>Description</strong>: ${todo.description}`;
    dueDate.innerHTML = `<strong>Due Date</strong>: ${todo.dueDate}`;
    priority.innerHTML = `<strong>Priority</strong>: ${todo.priority}`;
    notes.innerHTML = `<strong>Notes</strong>: ${todo.notes}`;
    status.innerHTML = `<strong>Status</strong>: ${todo.status}`;
    editBtn.textContent = 'Edit Todo';

    // event listener for each unique todo's details
    editBtn.addEventListener('click', () => {
        renderEditTodoDialog();
    })    

    detailDiv.appendChild(title);
    detailDiv.appendChild(description);
    detailDiv.appendChild(dueDate);
    detailDiv.appendChild(priority);
    detailDiv.appendChild(notes);
    detailDiv.appendChild(status);
}

export function renderAddProjectDialog() {
    let projectDiag = document.querySelector('.project-dialog');
    projectDiag.showModal();
}

export function saveProject(project) {
    let projectName = document.querySelector('.project-name');
    project.name = projectName.value;
}

export function closeAddProjectDialog() {
    let projectDiag = document.querySelector('.project-dialog');
    projectDiag.close();
}

export function renderAddTodoDialog() {
    let todoDiag = document.querySelector('.todo-dialog');
    todoDiag.showModal();
}

export function renderEditTodoDialog() {
    let todoDiag = document.querySelector('.edit-dialog');
    todoDiag.showModal();
}

export function renderDefaultEditValues(todo) {
    let title = document.querySelector('.edit-title');
    let description = document.querySelector('.edit-description');
    let dueDate = document.querySelector('.edit-due-date');
    let priority = document.querySelector('.edit-priority');
    let notes = document.querySelector('.edit-notes');

    title.value = todo.title;
    description.value = todo.description;
    dueDate.value = todo.dueDate;
    priority.value = todo.priority;
    notes.value = todo.notes;
}

export function closeTodoDialog() {
    let todoDiag = document.querySelector('.todo-dialog');
    todoDiag.close();
}

export function closeEditDialog() {
    let todoDiag = document.querySelector('.edit-dialog');
    todoDiag.close();
}

export function saveTodo(todo) {
    let title = document.querySelector('.todo-title');
    let description = document.querySelector('.todo-description');
    let dueDate = document.querySelector('.todo-due-date');
    let priority = document.querySelector('.todo-priority');
    let notes = document.querySelector('.todo-notes');

    todo.title = title.value;
    todo.description = description.value;
    todo.dueDate = dueDate.value;
    todo.priority = priority.value;
    todo.notes = notes.value;
}

export function saveEdit(todo) {
    let title = document.querySelector('.edit-title');
    let description = document.querySelector('.edit-description');
    let dueDate = document.querySelector('.edit-due-date');
    let priority = document.querySelector('.edit-priority');
    let notes = document.querySelector('.edit-notes');

    todo.title = title.value;
    todo.description = description.value;
    todo.dueDate = dueDate.value;
    todo.priority = priority.value;
    todo.notes = notes.value;
}

