import { projectList } from "./projectList.js"
import { displayTasks } from "./displayTasks.js";
import { removeChild } from "./removeChild.js";

function displayAllTasks() {
    const taskContainer = document.querySelector(".task-container");

    removeChild(taskContainer);

    const allTasksTitle = document.createElement("h2");
    allTasksTitle.textContent = "All tasks";
    allTasksTitle.classList.add("all-tasks-title");
    taskContainer.appendChild(allTasksTitle);

    projectList.forEach(project => {
        displayTasks(project, taskContainer, false);
    });
}

export {displayAllTasks}