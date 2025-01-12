import { removeChild } from "./removeChild";

// creates a list item with data from the task array
function displayTasks(project, container, emptyContainer = true) {
    if (emptyContainer) {
        removeChild(container);
    }

    const title = document.createElement("h3");
    title.textContent = project.title;
    title.classList.add("project-title");
    const taskListEl = document.createElement("ul");
    taskListEl.classList.add("task-list");

    const taskList = project.getTasks();
    taskList.forEach((task, index) => {
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
            // viewMore();
        })

        editIcon.classList.add("edit-icon");
        editIcon.addEventListener("click", ()=> {
            // editTask();
            
        })

        deleteIcon.classList.add("delete-icon");
        deleteIcon.addEventListener("click", ()=> {
            project.removeTask(index);
        })

        item.appendChild(checkbox);
        item.appendChild(title);
        item.appendChild(dueDate);
        item.appendChild(viewMoreIcon)
        item.appendChild(editIcon);
        item.appendChild(deleteIcon);

        taskListEl.appendChild(item);
    });
    container.appendChild(title);
    container.appendChild(taskListEl);
};

export {displayTasks}