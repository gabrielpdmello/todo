import { removeAllChild } from "./removeAllChild";
import { displayAllProjects } from "./displayAllProjects";

function removeTask(project, taskIndex) {
    const window = document.querySelector(".window");
    const taskContainer = document.querySelector(".task-container");
    project.removeTask(taskIndex);
    removeAllChild(taskContainer);
    displayAllProjects(taskContainer);
    window.classList.add("hide");
}

export {removeTask}