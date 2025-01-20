import { displayViewMoreMenu } from "./displayViewMoreMenu";
import { removeTask } from "./removeTask";
import { displayNewTaskMenu } from "./displayNewTaskMenu";

function displayTask(project, task, taskIndex, container) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const title = document.createElement("h4");
    const dueDate = document.createElement("span");
    const viewMoreIcon = document.createElement("span");
    const editIcon = document.createElement("span");
    const deleteIcon = document.createElement("span");

    item.classList.add("task-item");

    if (task.priority === "low") {
        item.classList.add("priority-low");
    } else if (task.priority === "medium") {
        item.classList.add("priority-medium");
    } else if (task.priority === "high") {
        item.classList.add("priority-high");
    }

    checkbox.setAttribute("type", "checkbox");

    // toggle isDone value
    checkbox.addEventListener("click", () => {
        task.isDone = !task.isDone;
    })
    if (task.isDone === true) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
    checkbox.classList.add("is-done");

    title.textContent = task.title;
    title.classList.add("task-title");

    dueDate.textContent = task.dueDate;
    dueDate.classList.add("due-date");

    viewMoreIcon.classList.add("view-more-icon");
    viewMoreIcon.addEventListener("click", ()=> {
        displayViewMoreMenu(project, task, taskIndex, viewMoreIcon);
    })

    editIcon.classList.add("edit-icon");
    editIcon.addEventListener("click", ()=> {
        displayNewTaskMenu(project, editIcon, task);
    })

    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", ()=> {
        removeTask(project, taskIndex);
    })

    item.appendChild(checkbox);
    item.appendChild(title);
    item.appendChild(dueDate);
    item.appendChild(viewMoreIcon)
    item.appendChild(editIcon);
    item.appendChild(deleteIcon);

    container.appendChild(item);
}

export {displayTask}