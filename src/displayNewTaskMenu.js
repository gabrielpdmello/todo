import { display } from "./display";
import { removeAllChild } from "./removeAllChild";

function displayNewTaskMenu(project, button, taskEdit = false) {
    const window = document.querySelector(".window");
    removeAllChild(window);

    const heading = document.createElement("h2");
    heading.textContent = "Add new task";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Task title:";
    titleLabel.setAttribute("for", "title");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");

    const titleWrapper = document.createElement("span");
    titleWrapper.classList.add("window-wrapper-100");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.setAttribute("for", "priority");

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority");

    const selectWrapper = document.createElement("span");
    selectWrapper.classList.add("window-wrapper-50");

    const optionEmpty = document.createElement("option");
    optionEmpty.setAttribute("value", "");
    optionEmpty.textContent = "Choose task priority";

    const optionLow = document.createElement("option");
    optionLow.setAttribute("value", "low");
    optionLow.textContent = "low";

    const optionMedium = document.createElement("option");
    optionMedium.setAttribute("value", "medium");
    optionMedium.textContent = "medium";

    const optionHigh = document.createElement("option");
    optionHigh.setAttribute("value", "high");
    optionHigh.textContent = "high";

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due date:"
    dueDateLabel.setAttribute("for", "dueDate");

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDate");

    const dueDateWrapper = document.createElement("span");
    dueDateWrapper.classList.add("window-wrapper-50");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Task description:";
    descriptionLabel.setAttribute("for", "description");

    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.setAttribute("id", "description");

    const descriptionWrapper = document.createElement("span");
    descriptionWrapper.classList.add("window-wrapper-100");

    const doneButton = document.createElement("button");
    doneButton.classList.add("button--primary");
    doneButton.classList.add("done-button");
    doneButton.textContent = "Add task";

    prioritySelect.appendChild(optionEmpty);
    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionMedium);
    prioritySelect.appendChild(optionHigh);

    if (taskEdit) {
        heading.textContent = "Edit task";
        titleInput.value = taskEdit.title;
        prioritySelect.value = taskEdit.priority;
        dueDateInput.value = taskEdit.dueDate;
        descriptionTextarea.value = taskEdit.description;
        doneButton.textContent = "Finish edit";
        doneButton.addEventListener("click", ()=> {
            if (titleInput.value && prioritySelect.value && dueDateInput.value && descriptionTextarea.value) {
                taskEdit.title = titleInput.value;
                taskEdit.priority = prioritySelect.value;
                taskEdit.dueDate = dueDateInput.value;
                taskEdit.description = descriptionTextarea.value;
                display.currentTab();
                window.classList.add("hide");
            }
        })
    } else {
        doneButton.addEventListener("click", ()=> {
            if (titleInput.value && prioritySelect.value && dueDateInput.value && descriptionTextarea.value) {
                project.newTask(titleInput.value, descriptionTextarea.value, dueDateInput.value, prioritySelect.value);
                display.project(project);
                window.classList.add("hide");
            }
        })
    }

    titleWrapper.appendChild(titleLabel);
    titleWrapper.appendChild(titleInput);
    selectWrapper.appendChild(priorityLabel);
    selectWrapper.appendChild(prioritySelect);
    dueDateWrapper.appendChild(dueDateLabel);
    dueDateWrapper.appendChild(dueDateInput);
    descriptionWrapper.appendChild(descriptionLabel);
    descriptionWrapper.appendChild(descriptionTextarea);

    const rowWrapper = document.createElement("span");
    rowWrapper.classList.add("window-row-wrapper");
    rowWrapper.appendChild(selectWrapper);
    rowWrapper.appendChild(dueDateWrapper);

    window.appendChild(heading);
    window.appendChild(titleWrapper);
    window.appendChild(rowWrapper);
    window.appendChild(descriptionWrapper);
    window.appendChild(doneButton);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
        }
    });
}

export {displayNewTaskMenu};