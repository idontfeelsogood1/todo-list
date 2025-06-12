function createDomProject(project) {
    let projectContainer = document.querySelector('.project-container');
    
    let projectDiv = document.createElement('div');
    let projectName = document.createElement('p');
    let removeBtn = document.createElement('button');

    removeBtn.textContent = 'x';

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(removeBtn);
    
    projectContainer.appendChild(projectDiv); 
}

function createDomTodo(todo) {
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

    title.textContent = todo.title;
    description.innerHTML = `<strong>Description</strong>: ${todo.description}`;
    dueDate.innerHTML = `<strong>Due Date</strong>: ${todo.dueDate}`;
    priority.innerHTML = `<strong>Priority</strong>: ${todo.priority}`;
    notes.innerHTML = `<strong>Notes</strong>: ${todo.notes}`;
    status.innerHTML = `<strong>Status</strong>: ${todo.status}`;

    detailContainer.appendChild(title);
    detailContainer.appendChild(description);
    detailContainer.appendChild(dueDate);
    detailContainer.appendChild(priority);
    detailContainer.appendChild(notes);
    detailContainer.appendChild(status);
}

