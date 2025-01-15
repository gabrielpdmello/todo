import { removeAllChild } from "./removeAllChild.js";
import { displayTask } from "./displayTask.js";
import { addTask } from "./addTask.js";

// creates a list item with data from the task array
function displayProject(project, emptyContainer = true, addNewTaskButton = true) {
    const taskContainer = document.querySelector(".task-container");
    
    if (emptyContainer) {
        removeAllChild(taskContainer);
    }

    const projectHeader = document.createElement("span");
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitle.classList.add("project-title");
    const taskListEl = document.createElement("ul");
    taskListEl.classList.add("task-list");

    const taskList = project.getTasks();
    taskList.forEach((task, index) => {
        displayTask(project, task, index, taskListEl);
    });

    projectHeader.appendChild(projectTitle)

    if (addNewTaskButton) {
        const newTaskButton = document.createElement("span");
        const addIcon = document.createElement("span");
        const addTaskText = document.createElement("span");

        addIcon.classList.add("add-icon");
        addTaskText.textContent = "New task";
        newTaskButton.appendChild(addTaskText);
        newTaskButton.appendChild(addIcon);
        newTaskButton.addEventListener("click", ()=> {
            addTask(project, newTaskButton);
        })
        projectHeader.appendChild(newTaskButton);

    }

    taskContainer.appendChild(projectHeader);
    taskContainer.appendChild(taskListEl);
};

export {displayProject}