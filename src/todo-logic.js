import * as dom from './todo-dom';

export function createDefaultProject(Project, projectArray) {
    let project1 = new Project('Default Project 1');
    projectArray.arr.push(project1);
    dom.createDomProject(project1, projectArray);
    project1.selected = true;
}

export function createNewProject(Project, name) {
    return new Project(name);
}

export function addNewProjectToArray(project, projectArray) {
    projectArray.arr.push(project);
}

export function createNewTodo(Todo, title, description, dueDate, priority, notes, status) {
    return new Todo(title, description, dueDate, priority, notes, status);
}

export function addNewTodoToProject(projectName, projectArray, todo) {
    for (let project of projectArray) {
        if (project.name === projectName) {
            project.todoList.push(todo);
        }
    }
}

export function changeTodoPriority(todo, priority) {
    todo.priority = priority;
}

export function changeTodoStatus(todo, status) {
    if (todo.status === 'Incomplete') {
        todo.status = 'Completed';
    } else {
        todo.status = 'Incomplete';
    }
}

export function deleteProject(project, projectArray) {
    projectArray.arr.splice(projectArray.arr.indexOf(project), 1);
}

export function deleteTodoFromProject(todo, project) {
    if (project.todoList.includes(todo)) {
        project.todoList.splice(project.todoList.indexOf(todo), 1);
    }
}

export function editTodo(todo, title, description, dueDate, priority, notes) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.notes = notes;
} 

export function getProjectName() {
    return document.querySelector('.project-name').value;
}