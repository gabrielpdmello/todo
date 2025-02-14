import { display } from "./display";
import { removeAllChild } from "./removeAllChild";
import { windowPopUp } from "./windowPopUp.js";
import { format, parse, parseISO} from "date-fns";
import { projectList } from "./projectList.js";

function displayNewTaskMenu(project, button, taskEdit = false) {
    const window = document.querySelector(".window");
    removeAllChild(window);
    
    const windowForm = document.createElement("form");
    windowForm.setAttribute("autocomplete", "off");
    windowForm.addEventListener("submit", (e)=> {
        e.preventDefault();
    })

    const heading = document.createElement("h2");
    heading.textContent = "Add new task";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Task title:";
    titleLabel.setAttribute("for", "title");

    const titleInput = document.createElement("input");
    titleInput.required = true;
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder","must be 1-50 characters long");
    titleInput.setAttribute("minlength", "1");
    titleInput.setAttribute("maxlength", "50");

    const titleWrapper = document.createElement("span");
    titleWrapper.classList.add("window-wrapper-100");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.setAttribute("for", "priority");

    const prioritySelect = document.createElement("select");
    prioritySelect.required = true;
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
    dueDateInput.required = true;
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDate");

    const dueDateWrapper = document.createElement("span");
    dueDateWrapper.classList.add("window-wrapper-50");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Task description:";
    descriptionLabel.setAttribute("for", "description");

    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.setAttribute("id", "description");
    descriptionTextarea.setAttribute("placeholder", "max length: 1500 characters");
    descriptionTextarea.setAttribute("maxlength", "1500");

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
        // format date so the input type=date understands the date string
        dueDateInput.value = format(parse(taskEdit.dueDate, "dd/MM/yyyy", new Date()), "yyyy-MM-dd");
        descriptionTextarea.value = taskEdit.description;
        doneButton.textContent = "Finish edit";
        doneButton.addEventListener("click", ()=> {
            if (titleInput.value && prioritySelect.value && dueDateInput.value) {
                const formatDate = format(parseISO(dueDateInput.value), "dd/MM/yyyy");
                taskEdit.title = titleInput.value;
                taskEdit.priority = prioritySelect.value;
                taskEdit.dueDate = formatDate;
                if (!descriptionTextarea.value) {
                    descriptionTextarea.value = "No description."
                }
                taskEdit.description = descriptionTextarea.value;
                localStorage.setItem("projectList", JSON.stringify(projectList));
                display.currentTab();
                window.classList.add("hide");
            }
        })
    } else {
        doneButton.addEventListener("click", ()=> {
            if (titleInput.value && prioritySelect.value && dueDateInput.value) {
                if (!descriptionTextarea.value) {
                    descriptionTextarea.value = "No description."
                }

                const formatDate = format(parseISO(dueDateInput.value), "dd/MM/yyyy");
                project.newTask(titleInput.value, descriptionTextarea.value, formatDate, prioritySelect.value);
                localStorage.setItem("projectList", JSON.stringify(projectList));
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

    windowForm.appendChild(heading);
    windowForm.appendChild(titleWrapper);
    windowForm.appendChild(rowWrapper);
    windowForm.appendChild(descriptionWrapper);
    windowForm.appendChild(doneButton);
    window.appendChild(windowForm);

    windowPopUp.show(button);
}

export {displayNewTaskMenu};