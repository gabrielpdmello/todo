import { displayProject } from "./displayProject";
import { removeAllChild } from "./removeAllChild";

function addTask(project, button) {
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
    const addTaskButton = document.createElement("button");

    titleLabel.textContent = "Task title";
    titleLabel.setAttribute("for", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");

    descriptionLabel.textContent = "Task description";
    descriptionLabel.setAttribute("for", "description");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");

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

    dueDateLabel.textContent = "Due date:"
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("name", "dueDate");

    addTaskButton.textContent = "Add task";
    addTaskButton.addEventListener("click", () => {
        if (titleInput.value && descriptionInput.value && prioritySelect.value && dueDateInput.value) {
            project.newTask(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value);
            displayProject(project);
            window.classList.add("hide");
            
        }
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
    window.appendChild(addTaskButton);

}

export {addTask};