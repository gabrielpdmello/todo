import { displayAllProjects } from "./displayAllProjects";
import { displayProjectList } from "./displayProjectList";
import { projectList } from "./projectList";
import { removeAllChild } from "./removeAllChild";

function displayRemoveProjectMenu(project, button) {
    const projectIndex = projectList.lastIndexOf(project);
    
    const window = document.querySelector(".window");
    removeAllChild(window);

    const heading = document.createElement("h2");
    heading.classList.add("window-heading");
    heading.textContent = "Remove project";
    const removeProjectText = document.createElement("p");
    removeProjectText.classList.add("window-text");
    removeProjectText.textContent = `Do you want to remove project ${project.title}?`;
    const removeProjectButton = document.createElement("button");
    removeProjectButton.classList.add("done-button");
    removeProjectButton.classList.add("button--primary");
    removeProjectButton.textContent = "Yes";
    const cancelProjectButton = document.createElement("button");
    cancelProjectButton.classList.add("done-button");
    cancelProjectButton.classList.add("button--primary");
    cancelProjectButton.textContent = "No";

    removeProjectButton.addEventListener("click", ()=> {
        projectList.splice(projectIndex, 1);
        displayAllProjects();
        displayProjectList();
        window.classList.add("hide")
    })

    cancelProjectButton.addEventListener("click", ()=> {
        window.classList.add("hide");
    })

    window.appendChild(heading);
    window.appendChild(removeProjectText);
    window.appendChild(cancelProjectButton);
    window.appendChild(removeProjectButton);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });
}

export {displayRemoveProjectMenu};