import { displayProject } from "./displayProject";
import { removeAllChild } from "./removeAllChild";

function addTask(project, button, task = false) {

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
    doneButton.classList.add("done-button");
    doneButton.textContent = "Add task";

    // not using an arrow function in case the event listener must be removed
    function addTaskEventListener() {
        if (titleInput.value && prioritySelect.value && dueDateInput.value && descriptionTextarea.value) {
            project.newTask(titleInput.value, descriptionTextarea.value, dueDateInput.value, prioritySelect.value);
            displayProject(project);
            window.classList.add("hide");
        }
    };

    doneButton.addEventListener("click", addTaskEventListener);

    prioritySelect.appendChild(optionEmpty);
    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionMedium);
    prioritySelect.appendChild(optionHigh);

    if (task) {
        heading.textContent = "Edit task";
        titleInput.value = task.title;
        prioritySelect.value = task.priority;
        dueDateInput.value = task.dueDate;
        descriptionTextarea.value = task.description;
        doneButton.textContent = "Finish edit";
        doneButton.removeEventListener("click", addTaskEventListener);
        doneButton.addEventListener("click", ()=> {
            if (titleInput.value && prioritySelect.value && dueDateInput.value && descriptionTextarea.value) {
                task.title = titleInput.value;
                task.priority = prioritySelect.value;
                task.dueDate = dueDateInput.value;
                task.description = descriptionTextarea.value;
                displayProject(project);
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

export {addTask};