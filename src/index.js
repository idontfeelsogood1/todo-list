import "./styles.css";
import "./todo-logic";
import "./todo-dom";

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
    constructor(title, description, dueDate, priority, notes, checkmark) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkmark = checkmark;
    }
}

