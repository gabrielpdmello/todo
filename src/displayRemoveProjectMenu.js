import { projectList } from "./projectList";
import { removeAllChild } from "./removeAllChild";
import { display } from "./display";

function displayRemoveProjectMenu(project, button) {
    const projectIndex = projectList.lastIndexOf(project);
    const window = document.querySelector(".window");
    removeAllChild(window);
    
    const windowForm = document.createElement("form");

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "Remove project";
    const removeProjectText = document.createElement("p");
    removeProjectText.classList.add("window-text");
    removeProjectText.textContent = `Do you want to remove project ${project.title}?`;
    const buttonContainer = document.createElement("span");
    buttonContainer.classList.add("window-button-container");
    const removeButton = document.createElement("button");
    removeButton.classList.add("button--primary");
    removeButton.textContent = "Yes";
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("button--primary");
    cancelButton.textContent = "No";

    removeButton.addEventListener("click", ()=> {
        projectList.splice(projectIndex, 1);
        display.allProjects();
        display.projectList();
        window.classList.add("hide")
    })

    cancelButton.addEventListener("click", ()=> {
        window.classList.add("hide");
    })

    windowForm.appendChild(heading);
    windowForm.appendChild(removeProjectText);
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(removeButton);
    windowForm.appendChild(buttonContainer);
    window.appendChild(windowForm);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
          cancelButton.focus();
        }
    });
}

export {displayRemoveProjectMenu};