import { removeAllChild } from "./removeAllChild.js";
import { display } from "./display.js";

function displayEditProjectMenu(project, button) {
    const window = document.querySelector(".window");
    const windowForm = document.querySelector(".window-form");
    removeAllChild(windowForm);

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "Edit project";
    const projectTitleLabel = document.createElement("label");
    projectTitleLabel.textContent = "Type new project name:";
    projectTitleLabel.setAttribute("for", "project-title");
    const projectTitleInput = document.createElement("input");
    projectTitleInput.classList.add("project-input");
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
            display.projectList();
            display.currentTab();
            window.classList.add("hide");
        }
    })

    windowForm.appendChild(heading);
    windowForm.appendChild(projectTitleLabel);
    windowForm.appendChild(projectTitleInput);
    windowForm.appendChild(doneButton);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });
}

export {displayEditProjectMenu}