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
        const newTaskButton = document.createElement("span");
        newTaskButton.classList.add("button--primary")
        const addIcon = document.createElement("span");
        const addTaskText = document.createElement("span");

        addIcon.classList.add("add-icon");
        addIcon.classList.add("white-icon");
        addTaskText.textContent = "New task";
        newTaskButton.appendChild(addTaskText);
        newTaskButton.appendChild(addIcon);
        newTaskButton.addEventListener("click", ()=> {
            display.newTaskMenu(project, newTaskButton);
        })

        const editIcon = document.createElement("span");
        editIcon.classList.add("edit-icon");

        editIcon.addEventListener("click", ()=> {
            display.editProjectMenu(project, editIcon);
        });
        
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");

        deleteIcon.addEventListener("click", ()=> {
            display.removeProjectMenu(project, deleteIcon);
        })
        
        buttonContainer.appendChild(newTaskButton);
        buttonContainer.appendChild(editIcon);
        buttonContainer.appendChild(deleteIcon);

        buttonContainer.classList.add("project-buttons")
        projectHeader.appendChild(buttonContainer);

    }
    projectHeader.classList.add("project-header");
    projectContainer.appendChild(projectHeader);
    const taskList = project.getTasks();

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