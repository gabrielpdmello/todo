import { newProject } from "./newProject.js";
import { removeAllChild } from "./removeAllChild.js";
import { projectList } from "./projectList.js";
import { display } from "./display.js";

function displayNewProjectMenu(button) {
    const window = document.querySelector(".window");
    removeAllChild(window);

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "New project";

    const newProjectLabel = document.createElement("label");
    newProjectLabel.textContent = "Type new project name:";
    newProjectLabel.setAttribute("for", "new-project");

    const newProjectInput = document.createElement("input");
    newProjectInput.classList.add("project-input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("id", "new-project");
    
    const newProjectButton = document.createElement("button");
    newProjectButton.classList.add("done-button");
    newProjectButton.classList.add("button--primary");
    newProjectButton.textContent = "Add project";

    newProjectButton.addEventListener("click", () => {
        if (newProjectInput.value) {
            const addNewProject = newProject(newProjectInput.value);
            projectList.push(addNewProject);
            display.projectList();
            display.setCurrentTab(()=> {
                display.project(addNewProject);
            });
            display.currentTab();
            newProjectInput.value = "";
            window.classList.add("hide");
        }
    })

    window.appendChild(heading);
    window.appendChild(newProjectLabel);
    window.appendChild(newProjectInput);
    window.appendChild(newProjectButton);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });
}

export {displayNewProjectMenu}