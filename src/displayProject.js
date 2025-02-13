import { removeAllChild } from "./removeAllChild.js";
import { display } from "./display.js";

function displayProject(project, emptyContainer = true, projectButtons = true) {
    const taskContainer = document.querySelector(".task-container");
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    if (emptyContainer) {
        removeAllChild(taskContainer);
    }

    const projectHeader = document.createElement("span");
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitle.classList.add("project-title");

    projectHeader.appendChild(projectTitle)

    if (projectButtons) {
        const buttonContainer = document.createElement("span");
        const newTaskButton = document.createElement("button");
        newTaskButton.classList.add("button--primary")
        newTaskButton.textContent = "New task";
        const addIcon = document.createElement("span");

        addIcon.classList.add("add-icon");
        addIcon.classList.add("white-icon");
        newTaskButton.appendChild(addIcon);
        newTaskButton.addEventListener("click", ()=> {
            display.newTaskMenu(project, newTaskButton);
        })

        const editButton = document.createElement("button");
        editButton.classList.add("icon-container");
        const editIcon = document.createElement("span");
        editIcon.classList.add("edit-icon");

        editButton.addEventListener("click", ()=> {
            display.editProjectMenu(project, editButton);
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("icon-container");
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");

        deleteButton.addEventListener("click", ()=> {
            display.removeProjectMenu(project, deleteButton);
        })
        
        buttonContainer.appendChild(newTaskButton);
        editButton.appendChild(editIcon);
        buttonContainer.appendChild(editButton);
        deleteButton.appendChild(deleteIcon);
        buttonContainer.appendChild(deleteButton);

        buttonContainer.classList.add("project-buttons")
        projectHeader.appendChild(buttonContainer);

    }
    projectHeader.classList.add("project-header");
    projectContainer.appendChild(projectHeader);
    const taskList = project.tasks;

    if (taskList.length === 0) {
        const noTaskText = document.createElement("p");
        noTaskText.textContent = "No tasks."
        projectContainer.appendChild(noTaskText);
    } else {
        const taskListEl = document.createElement("ul");
        taskListEl.classList.add("task-list");
        taskList.forEach((task, index) => {
            display.task(project, task, index, taskListEl);
        });
        projectContainer.appendChild(taskListEl);
    }
    taskContainer.appendChild(projectContainer);
};

export {displayProject}