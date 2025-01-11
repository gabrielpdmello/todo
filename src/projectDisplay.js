import { projectList } from "./projectList"
import { toggleMenu } from "./toggleMenu.js";

function projectDisplay() {
    const projectListElement = document.querySelector(".projects-list");
    const newProjectMenu = document.querySelector(".new-project-menu");
    
    // this sorts the objects based on their title value. case-insensitive
    projectList.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        return 0
    })

    // this deletes every child of the list
    while(projectListElement.lastChild) {
        projectListElement.removeChild(projectListElement.lastChild);
    }

    const allTasks = document.createElement("li");
    allTasks.textContent = "All tasks";
    // allTasks.addEventListener("click", displayAllTasks);
    projectListElement.appendChild(allTasks)

    projectList.forEach(element => {
        const item = document.createElement("li");
        item.textContent = element.title;
        // item.addEventListener("click", displayTasks());
        projectListElement.appendChild(item);
    });

    const newProjectMenuToggle = document.createElement("li");
    const newProjectMenuToggleText = document.createElement("span");
    const addIcon = document.createElement("span");

    newProjectMenuToggle.classList.add("new-project-menu-toggle");
    toggleMenu(newProjectMenuToggle, newProjectMenu);
    newProjectMenuToggleText.textContent = "Add project";
    newProjectMenuToggleText.classList.add("new-project-menu-toggle-text");
    addIcon.classList.add("add-icon")

    newProjectMenuToggle.appendChild(newProjectMenuToggleText);
    newProjectMenuToggle.appendChild(addIcon);
    projectListElement.appendChild(newProjectMenuToggle);

}

export { projectDisplay }