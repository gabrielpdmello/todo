import "./styles.css";
import { newProject } from "./newProject.js";
import { projectList } from "./projectList.js";
import { projectDisplay } from "./projectDisplay.js";
import { displayAllTasks } from "./displayAllTasks.js";

const newProjectMenu = document.querySelector(".new-project-menu");
const newProjectButton = document.querySelector(".new-project-button");
const newProjectInput = document.querySelector(".new-project-input");

projectList.push(newProject("teste"));
console.log(projectList);

projectList[0].newTask("title", "description", "dueDate", "low");
projectList[0].newTask("title", "description", "dueDate", "medium");
projectList[0].newTask("title", "description", "dueDate", "high");

console.log(projectList[0].getTasks());

projectList.push(newProject("teste2"));
console.log(projectList);

projectList[1].newTask("title", "description", "dueDate", "low");
projectList[1].newTask("title", "description", "dueDate", "medium");
projectList[1].newTask("title", "description", "dueDate", "high");

console.log(projectList[1].getTasks());

projectDisplay();
displayAllTasks();

newProjectButton.addEventListener("click", () => {
    if (newProjectInput.value) {
        projectList.push(newProject(newProjectInput.value));
        projectDisplay();
        newProjectInput.value = "";
        newProjectMenu.classList.add("hide");
        console.log(projectList);
    }
})