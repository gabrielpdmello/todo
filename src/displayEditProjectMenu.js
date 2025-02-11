import { removeAllChild } from "./removeAllChild.js";
import { display } from "./display.js";
import { addEventShowWindow } from "./addEventShowWindow.js";
import { projectList } from "./projectList.js";

function displayEditProjectMenu(project, button) {
    const window = document.querySelector(".window");
    removeAllChild(window);
    
    const windowForm = document.createElement("form");
    windowForm.addEventListener("submit", (e)=> {
        e.preventDefault();
    })

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "Edit project";
    const projectTitleLabel = document.createElement("label");
    projectTitleLabel.textContent = "Type new project name:";
    projectTitleLabel.setAttribute("for", "project-title");
    const projectTitleInput = document.createElement("input");
    projectTitleInput.classList.add("project-input");
    projectTitleInput.required = true;
    projectTitleInput.setAttribute("type", "text");
    projectTitleInput.setAttribute("id", "project-title");
    projectTitleInput.value = project.title;
    const doneButton = document.createElement("button");
    doneButton.classList.add("done-button");
    doneButton.classList.add("button--primary");
    doneButton.textContent = "Done";

    doneButton.addEventListener("click", () => {
        if (projectTitleInput.value) {
            project.title = projectTitleInput.value;
            localStorage.setItem("projectList", JSON.stringify(projectList));
            display.projectList();
            display.currentTab();
            window.classList.add("hide");
        }
    })

    windowForm.appendChild(heading);
    windowForm.appendChild(projectTitleLabel);
    windowForm.appendChild(projectTitleInput);
    windowForm.appendChild(doneButton);
    window.appendChild(windowForm);

    addEventShowWindow(button);
}

export {displayEditProjectMenu}