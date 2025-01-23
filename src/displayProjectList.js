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

    const allTasks = document.createElement("li");
    allTasks.textContent = "All tasks";
    allTasks.classList.add("project-list-item");
    allTasks.addEventListener("click", () => {
        display.setCurrentTab(()=> {
            display.allProjects();
        });
        display.currentTab();
    });
    projectListElement.appendChild(allTasks)

    projectList.forEach(project => {
        const item = document.createElement("li");
        item.classList.add("project-list-item");
        item.textContent = project.title;
        
        item.addEventListener("click", () => {
            display.setCurrentTab(()=> {
                display.project(project);
            });
            display.currentTab();
        });
        projectListElement.appendChild(item);
    });

    const newProjectMenuToggle = document.createElement("li");
    newProjectMenuToggle.classList.add("new-project-menu-toggle");
    const newProjectMenuToggleText = document.createElement("span");
    newProjectMenuToggleText.textContent = "Add project";
    newProjectMenuToggleText.classList.add("new-project-menu-toggle-text");
    const addIcon = document.createElement("span");
    addIcon.classList.add("add-icon");
    addIcon.classList.add("white-icon");
    newProjectMenuToggle.appendChild(newProjectMenuToggleText);
    newProjectMenuToggle.appendChild(addIcon);
    newProjectMenuToggle.addEventListener("click", ()=> {
        display.newProjectMenu(newProjectMenuToggle);
    })
    projectListElement.appendChild(newProjectMenuToggle);

}

export { displayProjectList }