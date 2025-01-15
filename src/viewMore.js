import { removeAllChild } from "./removeAllChild";

// show all task's info on a div
function viewMore(project, task, taskIndex, button) {
    const body = document.querySelector("body");
    const window = document.querySelector(".window");
    removeAllChild(window);
    const title = document.createElement("h2");
    const description = document.createElement("span");
    const dueDate = document.createElement("span");
    const priority = document.createElement("span");
    const checkbox = document.createElement("input");
    const deleteIcon = document.createElement("span");

    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = `Due date: ${task.dueDate}`;
    priority.textContent = `Priority: ${task.priority}`;
    checkbox.setAttribute("type", "checkbox");

    // toggles isDone property value
    checkbox.addEventListener("click", () => {
    task.isDone = !task.isDone;
    })
    if (task.isDone === true) {
    checkbox.checked = true;
    } else {
    checkbox.checked = false;
    }
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", ()=> {
    project.removeTask(taskIndex);
    })


    window.appendChild(title);
    window.appendChild(description);
    window.appendChild(dueDate);
    window.appendChild(priority);
    window.appendChild(checkbox);
    window.appendChild(deleteIcon);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });

    body.appendChild(window);

}

export {viewMore}