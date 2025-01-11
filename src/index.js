import "./styles.css";
import { newProject } from "./newProject.js";
import { projectList } from "./projectList.js";
import { projectDisplay } from "./projectDisplay.js";

const newProjectMenu = document.querySelector(".new-project-menu");
const newProjectButton = document.querySelector(".new-project-button");
const newProjectInput = document.querySelector(".new-project-input");

projectDisplay();

newProjectButton.addEventListener("click", () => {
    if (newProjectInput.value) {
        projectList.push(newProject(newProjectInput.value));
        projectDisplay();
        newProjectInput.value = "";
        newProjectMenu.classList.add("hide");
        console.log(projectList);
    }
})