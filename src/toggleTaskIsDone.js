import { projectArray } from "./projectArray";
import { displayTab } from "./displayTab";

// toggles task's isDone property value
const toggleTaskIsDone = function(task, el, title = false) {
    el.addEventListener("click", () => {
        task.isDone = !task.isDone;
        if (task.isDone === true) {
            el.checked = true;
            if (title) {
                title.classList.add("task-title--done");
            }
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
        } else {
            el.checked = false;
            if (title) {
                title.classList.remove("task-title--done");
            }
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
        }

        displayTab.currentTab();
    })
}
export {toggleTaskIsDone}