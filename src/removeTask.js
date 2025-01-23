import { removeAllChild } from "./removeAllChild";
import { display } from "./display";

function removeTask(project, taskIndex) {
    const window = document.querySelector(".window");
    const taskContainer = document.querySelector(".task-container");
    project.removeTask(taskIndex);
    removeAllChild(taskContainer);
    display.currentTab();
    window.classList.add("hide");
}

export {removeTask}