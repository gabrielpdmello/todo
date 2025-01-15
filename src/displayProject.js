import { removeAllChild } from "./removeAllChild.js";
import { displayTask } from "./displayTask.js";

// creates a list item with data from the task array
function displayProject(project, emptyContainer = true) {
    const taskContainer = document.querySelector(".task-container");
    
    if (emptyContainer) {
        removeAllChild(taskContainer);
    }

    const title = document.createElement("h3");
    title.textContent = project.title;
    title.classList.add("project-title");
    const taskListEl = document.createElement("ul");
    taskListEl.classList.add("task-list");

    const taskList = project.getTasks();
    taskList.forEach((task, index) => {
        displayTask(project, task, index, taskListEl);
    });
    taskContainer.appendChild(title);
    taskContainer.appendChild(taskListEl);
};

export {displayProject}