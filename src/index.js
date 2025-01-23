import "./styles.css";
import { newProject } from "./newProject.js";
import { projectList } from "./projectList.js";
import { display } from "./display.js";

const window = document.querySelector(".window");

document.addEventListener("click", e => {
    if (!window.contains(e.target) && !window.classList.contains("hide")) {
      window.classList.add("hide");
    }
});

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

display.projectList();
display.setCurrentTab(display.allProjects);
display.currentTab();