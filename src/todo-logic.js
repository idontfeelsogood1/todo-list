function createDefaultProject(Project) {
    let project1 = new Project('Default Project 1');
    projectArray.arr = [project1];
}

function createNewProject(Project, name) {
    return new Project(name);
}

function addNewProjectToArray(project, projectArray) {
    projectArray.arr.push(project);
}

function createNewTodo(Todo, title, description, dueDate, priority, notes, checkmark, status) {
    return new Todo(title, description, dueDate, priority, notes, checkmark, status);
}

function addNewTodoToProject(projectName, projectArray, todo) {
    for (let project of projectArray) {
        if (project.name === projectName) {
            project.todoList.push(todo);
        }
    }
}

function changeTodoPriority(todo, priority) {
    todo.priority = priority;
}

function changeTodoCheckMark(todo, checkmark) {
    todo.checkmark = checkmark;
}

function setTodoDefaultStatus(todo) {
    todo.status = 'Incomplete';
}

function changeTodoStatus(todo, status) {
    if (todo.status === 'Incomplete') {
        todo.status = 'Completed';
    } else {
        todo.status = 'Incomplete';
    }
}

function deleteProject(project, projectArray) {
    projectArray.arr.splice(projectArray.arr.indexOf(project), 1);
}

function deleteTodoFromProject(todo, project) {
    if (project.todoList.includes(todo)) {
        project.todoList.splice(project.todoList.indexOf(todo), 1);
    }
}

function editTodo(todo, title, description, dueDate, priority, notes) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.notes = notes;
} 


export * from "./todo-logic";