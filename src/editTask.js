import { removeAllChild } from "./removeAllChild";
import { removeTask } from "./removeTask";

function editTask(task, taskIndex, project, button) {
    const window = document.querySelector(".window");
    removeAllChild(window);
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    const priorityLabel = document.createElement("label");
    const prioritySelect = document.createElement("select");
    const optionEmpty = document.createElement("option");
    const optionLow = document.createElement("option");
    const optionMedium = document.createElement("option");
    const optionHigh = document.createElement("option");
    const dueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");
    const finishEditButton = document.createElement("button");
    const isDoneInput = document.createElement("input");
    const isDoneLabel = document.createElement("label");
    const deleteButton = document.createElement("span");
    const deleteText = document.createElement("span");
    const deleteIcon = document.createElement("span")

    titleLabel.textContent = "Task title";
    titleLabel.setAttribute("for", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.value = task.title;

    descriptionLabel.textContent = "Task description";
    descriptionLabel.setAttribute("for", "description");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.value = task.description;

    priorityLabel.textContent = "Priority";
    priorityLabel.setAttribute("for", "priority");
    prioritySelect.setAttribute("id", "priority");
    optionEmpty.setAttribute("value", "");
    optionEmpty.textContent = "Choose task priority";
    optionLow.setAttribute("value", "low");
    optionLow.textContent = "low";
    optionMedium.setAttribute("value", "medium");
    optionMedium.textContent = "medium";
    optionHigh.setAttribute("value", "high");
    optionHigh.textContent = "high";

    prioritySelect.appendChild(optionEmpty);
    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionMedium);
    prioritySelect.appendChild(optionHigh);
    prioritySelect.value = task.priority;

    dueDateLabel.textContent = "Due date:"
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.value = task.dueDate;

    finishEditButton.textContent = "Finish edit";
    finishEditButton.addEventListener("click", () => {
        if (titleInput.value && descriptionInput.value && prioritySelect.value && dueDateInput.value) {
            task.title = titleInput.value;
            task.description = descriptionInput.value;
            task.priority = prioritySelect.value;
            task.dueDate = dueDateInput.value;
            window.classList.add("hide");
            

        }
    })

    isDoneLabel.textContent = "Task done:";
    isDoneLabel.setAttribute("for", "isDone");
    isDoneInput.setAttribute("type", "checkbox");
    isDoneInput.setAttribute("id", "isDone");
    // toggle isDone value
    isDoneInput.addEventListener("click", () => {
        task.isDone = !task.isDone;
    })
    if (task.isDone === true) {
        isDoneInput.checked = true;
    } else {
        isDoneInput.checked = false;
    }

    deleteText.textContent = "Delete task";
    deleteIcon.classList.add("delete-icon")

    deleteButton.appendChild(deleteText);
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", ()=> {
        removeTask(project, taskIndex);
    })

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });

    window.appendChild(titleLabel);
    window.appendChild(titleInput);
    window.appendChild(descriptionLabel);
    window.appendChild(descriptionInput);
    window.appendChild(priorityLabel);
    window.appendChild(prioritySelect);
    window.appendChild(dueDateLabel);
    window.appendChild(dueDateInput);
    window.appendChild(isDoneInput);
    window.appendChild(isDoneLabel);
    window.appendChild(deleteButton);
    window.appendChild(finishEditButton);

}

export {editTask};