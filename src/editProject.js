import { removeAllChild } from "./removeAllChild.js";
import { displayProjectList } from "./displayProjectList.js";
import { displayProject } from "./displayProject.js";

function editProject(project, button) {
    const window = document.querySelector(".window");
    removeAllChild(window);

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
    doneButton.textContent = "Done";

    doneButton.addEventListener("click", () => {
        if (projectTitleInput.value) {
            project.title = projectTitleInput.value;
            displayProjectList();
            displayProject(project);
            window.classList.add("hide");
        }
    })

    window.appendChild(heading);
    window.appendChild(projectTitleLabel);
    window.appendChild(projectTitleInput);
    window.appendChild(doneButton);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });
}

export {editProject}