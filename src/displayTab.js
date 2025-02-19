import { removeAllChild } from "./removeAllChild.js";
import { projectArray } from "./projectArray.js";
import { displayWindow } from "./displayWindow.js";
import { sortProjects } from "./sortProjects.js";
import { toggleTaskIsDone } from "./toggleTaskIsDone.js";

/* 
    displays parts of the website, such as sidebar and main content container,
    and also saves current "tab"
*/
const displayTab = (function() {
    const taskContainer = document.querySelector(".task-container");
    let current;
    
    const currentTab = function() {
        if (current) {
            current();
        }
    }

    const setCurrentTab = function(tab) {
        current = tab;
    }

    const allProjects = function() {
        removeAllChild(taskContainer);
    
        const allTasksTitle = document.createElement("h2");
        allTasksTitle.textContent = "All projects";
        allTasksTitle.classList.add("all-tasks-title");
        taskContainer.appendChild(allTasksTitle);
    
        if (projectArray.length === 0) {
            const noProjects = document.createElement("p");
            noProjects.textContent = "No projects. Create a new project to add new tasks.";
            taskContainer.appendChild(noProjects);
        } else {
            projectArray.forEach(project => {
                displayTab.project(project, false, false);
            });
        }
    };

    const project = function(project, emptyContainer = true, projectButtons = true) {
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
                displayWindow.newTaskMenu(project, newTaskButton);
            })

            const editButton = document.createElement("button");
            editButton.classList.add("icon-container");
            const editIcon = document.createElement("span");
            editIcon.classList.add("edit-icon");

            editButton.addEventListener("click", ()=> {
                displayWindow.editProjectMenu(project, editButton);
            });
            
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("icon-container");
            const deleteIcon = document.createElement("span");
            deleteIcon.classList.add("delete-icon");

            deleteButton.addEventListener("click", ()=> {
                displayWindow.removeProjectMenu(project, deleteButton);
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
                displayTab.task(project, task, index, taskListEl);
            });
            projectContainer.appendChild(taskListEl);
        }
        taskContainer.appendChild(projectContainer);
    }

    const projectList = function() {
        const projectArrayElement = document.querySelector(".project-list");
        sortProjects()
        removeAllChild(projectArrayElement);

        const allTasksItem = document.createElement("li");
        const allTasksButton = document.createElement("button");
        allTasksButton.textContent = "All projects";
        allTasksButton.classList.add("project-list-button");
        allTasksButton.addEventListener("click", () => {
            displayTab.setCurrentTab(()=> {
                displayTab.allProjects();
            });
            displayTab.currentTab();
        });
        allTasksItem.appendChild(allTasksButton);
        projectArrayElement.appendChild(allTasksItem)

        projectArray.forEach(project => {
            const projectItem = document.createElement("li");
            const projectButton = document.createElement("button");
            projectButton.classList.add("project-list-button");
            projectButton.textContent = project.title;
            projectButton.title = project.title;
            
            projectButton.addEventListener("click", () => {
                displayTab.setCurrentTab(()=> {
                    displayTab.project(project);
                });
                displayTab.currentTab();
            });
            projectItem.appendChild(projectButton);
            projectArrayElement.appendChild(projectItem);
        });

        const newProjectMenuItem = document.createElement("li");
        const newProjectMenuButton = document.createElement("button");
        newProjectMenuButton.classList.add("project-list-button");
        newProjectMenuButton.classList.add("project-list-button--new-project");
        newProjectMenuButton.textContent = "Add project";
        const addIcon = document.createElement("span");
        addIcon.classList.add("add-icon");
        addIcon.classList.add("white-icon");
        newProjectMenuButton.appendChild(addIcon);
        newProjectMenuItem.appendChild(newProjectMenuButton);
        newProjectMenuButton.addEventListener("click", ()=> {
            displayWindow.newProjectMenu(newProjectMenuButton);
        })
        projectArrayElement.appendChild(newProjectMenuItem);
    }

    const task = function(project, task, taskIndex, container) {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.classList.add("is-done");
        const title = document.createElement("h4");
        title.textContent = task.title;
        title.classList.add("task-title");
        const dueDate = document.createElement("span");
        dueDate.textContent = task.dueDate;
        dueDate.classList.add("due-date");
        const viewMoreButton = document.createElement("button");
        viewMoreButton.classList.add("icon-container");
        const viewMoreIcon = document.createElement("span");
        viewMoreIcon.classList.add("view-more-icon");
        viewMoreButton.addEventListener("click", ()=> {
            displayWindow.viewMoreMenu(project, task, taskIndex, viewMoreButton);
        })
        const editButton = document.createElement("button");
        editButton.classList.add("icon-container");
        const editIcon = document.createElement("span");
        editIcon.classList.add("edit-icon");
        editButton.addEventListener("click", ()=> {
            displayWindow.newTaskMenu(project, editButton, task);
        })
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("icon-container");
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");
        deleteButton.addEventListener("click", ()=> {
            project.removeTask(taskIndex);
            displayTab.currentTab();
        })

        item.classList.add("task-item");

        if (task.priority === "low") {
            item.classList.add("priority-low");
        } else if (task.priority === "medium") {
            item.classList.add("priority-medium");
        } else if (task.priority === "high") {
            item.classList.add("priority-high");
        }

        checkbox.setAttribute("type", "checkbox");

        toggleTaskIsDone(task, checkbox, title);
        
        if (task.isDone === true) {
            checkbox.checked = true;
            title.classList.add("task-title--done");
        }

        viewMoreButton.appendChild(viewMoreIcon);
        editButton.appendChild(editIcon);
        deleteButton.appendChild(deleteIcon);

        item.appendChild(checkbox);
        item.appendChild(title);
        item.appendChild(dueDate);
        item.appendChild(viewMoreButton)
        item.appendChild(editButton);
        item.appendChild(deleteButton);

        container.appendChild(item);
    }

    return {currentTab, setCurrentTab, allProjects, project, projectList, task}
})();

export { displayTab }