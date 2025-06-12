function createDefaultProject(Project) {
    let project1 = new Project('Default Project 1');
    let project2 = new Project('Default Project 2');

    projectArray.arr = [project1, project2];
}

function createNewProject(Project, name) {
    return new Project(name);
}

function addNewProjectToArray(project, projectArray) {
    projectArray.arr.push(project);
}

function createNewTodo(Todo, title, description, dueDate, priority, notes) {
    return new Todo(title, description, dueDate, priority, notes);
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

function deleteProject(project, projectArray) {
    projectArray.arr.splice(projectArray.arr.indexOf(project), 1);
}

function deleteTodoFromProject(todo, project) {
    if (project.todoList.includes(todo)) {
        project.todoList.splice(project.todoList.indexOf(todo), 1);
    }
}

export * from "todo-logic";