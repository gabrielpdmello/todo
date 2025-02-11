import { removeTask } from "./removeTask";
import { display } from "./display";
import { projectList } from "./projectList";

function displayTask(project, task, taskIndex, container) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.classList.add("is-done");
    const title = document.createElement("h4");
    title.textContent = task.title;
    title.classList.add("task-title");
    const dueDate = document.createElement("span");
    dueDate.textContent = task.dueDate;
    dueDate.classList.add("due-date");
    const viewMoreButton = document.createElement("button");
    viewMoreButton.classList.add("empty-button");
    const viewMoreIcon = document.createElement("span");
    viewMoreIcon.classList.add("view-more-icon");
    viewMoreButton.addEventListener("click", ()=> {
        display.viewMoreMenu(project, task, taskIndex, viewMoreButton);
    })
    const editButton = document.createElement("button");
    editButton.classList.add("empty-button");
    const editIcon = document.createElement("span");
    editIcon.classList.add("edit-icon");
    editButton.addEventListener("click", ()=> {
        display.newTaskMenu(project, editButton, task);
    })
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("empty-button");
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("delete-icon");
    deleteButton.addEventListener("click", ()=> {
        removeTask(project, taskIndex);
    })

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
        if (task.isDone === true) {
            checkbox.checked = true;
            title.classList.add("task-title--done");
            localStorage.setItem("projectList", JSON.stringify(projectList));
        } else {
            checkbox.checked = false;
            title.classList.remove("task-title--done");
            localStorage.setItem("projectList", JSON.stringify(projectList));
        }
    })
    
    if (task.isDone === true) {
        checkbox.checked = true;
        title.classList.add("task-title--done");
    }

    viewMoreButton.appendChild(viewMoreIcon);
    editButton.appendChild(editIcon);
    deleteButton.appendChild(deleteIcon);

    item.appendChild(checkbox);
    item.appendChild(title);
    item.appendChild(dueDate);
    item.appendChild(viewMoreButton)
    item.appendChild(editButton);
    item.appendChild(deleteButton);

    container.appendChild(item);
}

export {displayTask}