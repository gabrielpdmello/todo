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

    if (projectList.length === 0) {
        const noProjects = document.createElement("p");
        noProjects.textContent = "No projects. Create a new project to add new tasks.";
        taskContainer.appendChild(noProjects);
    } else {
        projectList.forEach(project => {
            displayProject(project, false, false);
        });
    }
}

export {displayAllProjects}