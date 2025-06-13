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
    }
}

class Todo {
    constructor(title, description, dueDate, priority, notes, checkmark, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkmark = checkmark;
        this.status = status;
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

addProjectButton();
saveProjectButton();