import { projectList } from "./projectList.js"
import { removeAllChild } from "./removeAllChild.js";
import { display } from "./display.js";

function displayAllProjects() {
    const taskContainer = document.querySelector(".task-container");
    removeAllChild(taskContainer);

    const allTasksTitle = document.createElement("h2");
    allTasksTitle.textContent = "All projects";
    allTasksTitle.classList.add("all-tasks-title");
    taskContainer.appendChild(allTasksTitle);

    if (projectList.length === 0) {
        const noProjects = document.createElement("p");
        noProjects.textContent = "No projects. Create a new project to add new tasks.";
        taskContainer.appendChild(noProjects);
    } else {
        projectList.forEach(project => {
            display.project(project, false, false);
        });
    }
}

export {displayAllProjects}