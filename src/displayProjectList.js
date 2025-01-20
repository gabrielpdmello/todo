import { projectList } from "./projectList.js"
import { displayAllProjects } from "./displayAllProjects.js";
import { displayNewProjectMenu } from "./displayNewProjectMenu.js";
import { removeAllChild } from "./removeAllChild.js";
import { displayProject } from "./displayProject.js";

function displayProjectList() {
    const projectListElement = document.querySelector(".projects-list");
    const taskContainer = document.querySelector(".task-container");
    
    // sorts the objects based on their title value. case-insensitive
    projectList.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        return 0
    })

    removeAllChild(projectListElement);

    const allTasks = document.createElement("li");
    allTasks.textContent = "All tasks";
    allTasks.addEventListener("click", () => {
        displayAllProjects(taskContainer)
    });
    projectListElement.appendChild(allTasks)

    projectList.forEach(project => {
        const item = document.createElement("li");
        item.classList.add("project-item");
        item.textContent = project.title;
        
        item.addEventListener("click", () => {
            displayProject(project);
        });
        projectListElement.appendChild(item);
    });

    const newProjectMenuToggle = document.createElement("li");
    newProjectMenuToggle.classList.add("new-project-menu-toggle");
    const newProjectMenuToggleText = document.createElement("span");
    newProjectMenuToggleText.textContent = "Add project";
    newProjectMenuToggleText.classList.add("new-project-menu-toggle-text");
    const addIcon = document.createElement("span");
    addIcon.classList.add("add-icon")
    addIcon.classList.add("white-icon")
    newProjectMenuToggle.appendChild(newProjectMenuToggleText);
    newProjectMenuToggle.appendChild(addIcon);
    newProjectMenuToggle.addEventListener("click", ()=> {
        displayNewProjectMenu(newProjectMenuToggle);
    })
    projectListElement.appendChild(newProjectMenuToggle);

}

export { displayProjectList }