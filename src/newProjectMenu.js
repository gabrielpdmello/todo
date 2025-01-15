import { newProject } from "./newProject.js";
import { removeAllChild } from "./removeAllChild.js";
import { projectList } from "./projectList.js";
import { displayProjectList } from "./displayProjectList.js";
import { displayProject } from "./displayProject.js";

function newProjectMenu(button) {
    const window = document.querySelector(".window");
    removeAllChild(window);

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "New project";
    const newProjectLabel = document.createElement("label");
    newProjectLabel.textContent = "Type new project name:";
    newProjectLabel.setAttribute("for", "new-project-input");
    const newProjectInput = document.createElement("input");
    newProjectInput.classList.add("new-project-input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("id", "new-project-input");
    const newProjectButton = document.createElement("button");
    newProjectButton.classList.add("new-project-button");
    newProjectButton.textContent = "Add project";

    newProjectButton.addEventListener("click", () => {
        if (newProjectInput.value) {
            const addNewProject = newProject(newProjectInput.value);
            projectList.push(addNewProject);
            displayProjectList();
            displayProject(addNewProject);
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

export {newProjectMenu}