import { removeAllChild } from "./removeAllChild";
import { display } from "./display";
import { projectList } from "./projectList";

function removeTask(project, taskIndex) {
    const window = document.querySelector(".window");
    const taskContainer = document.querySelector(".task-container");
    project.removeTask(taskIndex);
    localStorage.setItem("projectList", JSON.stringify(projectList));
    removeAllChild(taskContainer);
    display.currentTab();
    window.classList.add("hide");
}

export {removeTask}