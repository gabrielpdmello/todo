import { projectArray } from "./projectArray";

const addProjectMethods = function (project, taskList) {    
    project.newTask = function(title, description, dueDate, priority) {
        let isDone = false;
        taskList.push({title, description, dueDate, priority, isDone});
    }

    project.removeTask = function(index) {
        taskList.splice(index, 1);
        localStorage.setItem("projectArray", JSON.stringify(projectArray));
    }
}

export {addProjectMethods}