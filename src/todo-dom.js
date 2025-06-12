import "./todo-logic";

function createDomProject(project, projectArray) {
    let projectContainer = document.querySelector('.project-container');
    
    let projectDiv = document.createElement('div');
    let projectName = document.createElement('p');
    let removeBtn = document.createElement('button');

    projectName = project.name;
    removeBtn.textContent = 'x';

    // event listeners for each unique project
    removeBtn.addEventListener('click', () => {
        deleteProject(project, projectArray);
        projectDiv.remove();
    }); 

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(removeBtn);
    
    projectContainer.appendChild(projectDiv); 
}

function createDomTodo(todo, project) {
    let todoContainer = document.querySelector('.todo-container');
    
    let todoDiv = document.createElement('div');
    let checkbox = document.createElement('button');
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
        document.querySelector('.detail-container')
        .innerHTML = '';
        createDomTodoDetails(todo);
    })

    removeBtn.addEventListener('click', () => {
        deleteTodoFromProject(todo, project);
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

function createDomTodoDetails(todo) {
    let detailContainer = document.querySelector('.detail-container');
    
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

    detailContainer.appendChild(title);
    detailContainer.appendChild(description);
    detailContainer.appendChild(dueDate);
    detailContainer.appendChild(priority);
    detailContainer.appendChild(notes);
    detailContainer.appendChild(status);
}

function renderAddProjectDialog() {
    let projectDiag = document.querySelector('.project-dialog');
    projectDiag.showModal();
}

function saveProject(project) {
    let projectName = document.querySelector('.project-name');
    project.name = projectName.value;
}

function closeAddProjectDialog() {
    let projectDiag = document.querySelector('.project-dialog');
    projectDiag.close();
}

function renderAddTodoDialog() {
    let todoDiag = document.querySelector('.todo-dialog');
    let h2 = document.querySelector('.todo-dialog > h2');
    h2.textContent = 'Add new Todo';
    todoDiag.showModal();
}

function renderEditTodoDialog() {
    let todoDiag = document.querySelector('.todo-dialog');
    let h2 = document.querySelector('.todo-dialog > h2');
    
    h2.textContent = 'Edit Todo';
    todoDiag.showModal();
}

function renderDefaultEditValues(todo) {
    let title = document.querySelector('.diag-title');
    let description = document.querySelector('.diag-description');
    let dueDate = document.querySelector('.diag-due-date');
    let priority = document.querySelector('.diag-priority');
    let notes = document.querySelector('.diag-notes');

    title.value = todo.title;
    description.value = todo.description;
    dueDate.value = todo.dueDate;
    priority.value = todo.priority;
    notes.value = todo.notes;
}

function closeTodoDialog() {
    let todoDiag = document.querySelector('.todo-dialog');
    todoDiag.close();
}

function saveTodo(todo) {
    let title = document.querySelector('.diag-title');
    let description = document.querySelector('.diag-description');
    let dueDate = document.querySelector('.diag-due-date');
    let priority = document.querySelector('.diag-priority');
    let notes = document.querySelector('.diag-notes');

    todo.title = title.value;
    todo.description = description.value;
    todo.dueDate = dueDate.value;
    todo.priority = priority.value;
    todo.notes = notes.value;
}

export * from 'todo-dom';
