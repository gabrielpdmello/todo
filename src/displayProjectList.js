import { projectList } from "./projectList.js"
import { removeAllChild } from "./removeAllChild.js";
import { display } from "./display.js";

function displayProjectList() {
    const projectListElement = document.querySelector(".project-list");
    
    // sorts the objects based on its title value. case-insensitive
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

    const allTasksItem = document.createElement("li");
    const allTasksButton = document.createElement("button");
    allTasksButton.textContent = "All tasks";
    allTasksButton.classList.add("project-list-button");
    allTasksButton.addEventListener("click", () => {
        display.setCurrentTab(()=> {
            display.allProjects();
        });
        display.currentTab();
    });
    allTasksItem.appendChild(allTasksButton);
    projectListElement.appendChild(allTasksItem)

    projectList.forEach(project => {
        const projectItem = document.createElement("li");
        const projectButton = document.createElement("button");
        projectButton.classList.add("project-list-button");
        projectButton.textContent = project.title;
        
        projectButton.addEventListener("click", () => {
            display.setCurrentTab(()=> {
                display.project(project);
            });
            display.currentTab();
        });
        projectItem.appendChild(projectButton);
        projectListElement.appendChild(projectItem);
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
        display.newProjectMenu(newProjectMenuButton);
    })
    projectListElement.appendChild(newProjectMenuItem);

}

export { displayProjectList }