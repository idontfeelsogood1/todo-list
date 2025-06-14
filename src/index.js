import "./styles.css";
import * as logic from "./todo-logic";
import * as dom from "./todo-dom";

const projectArray = {
    arr: [],
}

class Project {
    constructor(name) {
        this.name = name;
        this.todoList = [];
        this.selected = false;
    }
}

class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
        this.detailClicked = false;
    }
}


function addProjectButton() {
    document.querySelector('.add-project')
    .addEventListener('click', () => {
        dom.renderAddProjectDialog();
    });
}

function saveProjectButton() {
    document.querySelector('#save-project')
    .addEventListener('click', () => {
        let project = logic.createNewProject(Project, logic.getProjectName());
        logic.addNewProjectToArray(project, projectArray);
        dom.createDomProject(project, projectArray);
        dom.closeAddProjectDialog();
    });
}

function addTodoButton() {
    document.querySelector('.add-todo')
    .addEventListener('click', () => {
        dom.renderAddTodoDialog();
    })
}

function saveNewTodoButton() {
    let saveBtn = document.querySelector('#save-todo');
    saveBtn.addEventListener('click', () => {
        let title = document.querySelector('.todo-title').value;
        let description = document.querySelector('.todo-description').value;
        let dueDate = document.querySelector('.todo-due-date').value;
        let priority = document.querySelector('.todo-priority').value;
        let notes = document.querySelector('.todo-notes').value;
        let status = 'Incomplete';

        let todo = logic.createNewTodo(Todo, title, description, dueDate, priority, notes, status);
        
        for (let project of projectArray.arr) {
            if (project.selected === true) {
                let todoList = document.querySelectorAll('.todo');
                for (let eachTodo of todoList) {
                    eachTodo.remove();
                }
                project.todoList.push(todo);    
                dom.displayAllTodoOfProject(project);   
            }
        }

        dom.closeTodoDialog();
    });
}


logic.createDefaultProject(Project, projectArray);
dom.saveEditForRightTodo(projectArray);
addProjectButton();
saveProjectButton();
addTodoButton();
saveNewTodoButton();