import { projectList } from "./projectList.js"
import { displayProject } from "./displayProject.js";
import { removeAllChild } from "./removeAllChild.js";

function displayAllProjects() {
    const taskContainer = document.querySelector(".task-container");
    removeAllChild(taskContainer);

    const allTasksTitle = document.createElement("h2");
    allTasksTitle.textContent = "All tasks";
    allTasksTitle.classList.add("all-tasks-title");
    taskContainer.appendChild(allTasksTitle);
    projectList.forEach(project => {
        displayProject(project, false);
    });
}

export {displayAllProjects}