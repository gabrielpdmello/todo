import { removeAllChild } from "./removeAllChild.js";
import { windowPopUp } from "./windowPopUp.js";
import { projectArray } from "./projectArray.js";
import { newProject } from "./newProject.js";
import { parse, parseISO, format } from "date-fns";
import { displayTab } from "./displayTab.js";

const displayMenu = (function() {
    const window = document.querySelector(".window");
    
    const editProjectMenu = function(project, button){
        removeAllChild(window);
        
        const windowForm = document.createElement("form");
        windowForm.setAttribute("autocomplete", "off");
        windowForm.addEventListener("submit", (e)=> {
            e.preventDefault();
        })

        const heading = document.createElement("h2");
        heading.classList.add("window-heading");
        heading.textContent = "Edit project";
        const projectTitleLabel = document.createElement("label");
        projectTitleLabel.textContent = "Type new project name:";
        projectTitleLabel.setAttribute("for", "project-title");
        const projectTitleInput = document.createElement("input");
        projectTitleInput.classList.add("project-input");
        projectTitleInput.required = true;
        projectTitleInput.setAttribute("type", "text");
        projectTitleInput.setAttribute("id", "project-title");
        projectTitleInput.value = project.title;
        projectTitleInput.setAttribute("placeholder","must be 1-50 characters long");
        projectTitleInput.setAttribute("minlength", "1");
        projectTitleInput.setAttribute("maxlength", "50");
        const doneButton = document.createElement("button");
        doneButton.classList.add("done-button");
        doneButton.classList.add("button--primary");
        doneButton.textContent = "Done";

        doneButton.addEventListener("click", () => {
            if (projectTitleInput.value) {
                project.title = projectTitleInput.value;
                localStorage.setItem("projectArray", JSON.stringify(projectArray));
                displayTab.projectList();
                displayTab.currentTab();
                window.classList.add("hide");
            }
        })

        windowForm.appendChild(heading);
        windowForm.appendChild(projectTitleLabel);
        windowForm.appendChild(projectTitleInput);
        windowForm.appendChild(doneButton);
        window.appendChild(windowForm);

        windowPopUp.show(button);
    }

    const newProjectMenu = function(button) {
        removeAllChild(window);
        
        const windowForm = document.createElement("form");
        windowForm.setAttribute("autocomplete", "off");
        windowForm.addEventListener("submit", (e)=> {
            e.preventDefault();
        })

        const heading = document.createElement("h2");
        heading.classList.add("window-heading");
        heading.textContent = "New project";

        const newProjectLabel = document.createElement("label");
        newProjectLabel.textContent = "Type new project name:";
        newProjectLabel.setAttribute("for", "new-project");

        const newProjectInput = document.createElement("input");
        newProjectInput.required = true;
        newProjectInput.classList.add("project-input");
        newProjectInput.setAttribute("type", "text");
        newProjectInput.setAttribute("id", "new-project");
        newProjectInput.setAttribute("placeholder","must be 1-50 characters long");
        newProjectInput.setAttribute("minlength", "1");
        newProjectInput.setAttribute("maxlength", "50");
        
        const newProjectButton = document.createElement("button");
        newProjectButton.classList.add("done-button");
        newProjectButton.classList.add("button--primary");
        newProjectButton.textContent = "Add project";

        newProjectButton.addEventListener("click", () => {
            if (newProjectInput.value) {
                const addNewProject = newProject(newProjectInput.value);
                projectArray.push(addNewProject);

                localStorage.setItem("projectArray", JSON.stringify(projectArray));

                displayTab.projectList();
                displayTab.setCurrentTab(()=> {
                    displayTab.project(addNewProject);
                });
                displayTab.currentTab();
                window.classList.add("hide");
            }
        })

        windowForm.appendChild(heading);
        windowForm.appendChild(newProjectLabel);
        windowForm.appendChild(newProjectInput);
        windowForm.appendChild(newProjectButton);
        window.appendChild(windowForm);

        windowPopUp.show(button);
    }

    const newTaskMenu = function(project, button, taskEdit = false) {
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
                    localStorage.setItem("projectArray", JSON.stringify(projectArray));
                    displayTab.currentTab();
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
                    localStorage.setItem("projectArray", JSON.stringify(projectArray));
                    displayTab.project(project);
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

    const removeProjectMenu = function(project, button) {
        const projectIndex = projectArray.lastIndexOf(project);
        removeAllChild(window);
        
        const windowForm = document.createElement("form");
        windowForm.setAttribute("autocomplete", "off");

        const heading = document.createElement("h2");
        heading.classList.add("window-heading");
        heading.textContent = "Remove project";
        const removeProjectText = document.createElement("p");
        removeProjectText.classList.add("window-text");
        removeProjectText.textContent = `Do you want to remove project ${project.title}?`;
        const buttonContainer = document.createElement("span");
        buttonContainer.classList.add("window-button-container");
        const removeButton = document.createElement("button");
        removeButton.classList.add("button--primary");
        removeButton.textContent = "Yes";
        removeButton.setAttribute("type", "button");
        const cancelButton = document.createElement("button");
        cancelButton.classList.add("button--primary");
        cancelButton.textContent = "No";
        cancelButton.setAttribute("type", "button");

        removeButton.addEventListener("click", ()=> {
            projectArray.splice(projectIndex, 1);
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
            displayTab.allProjects();
            displayTab.projectList();
            window.classList.add("hide")
        })

        cancelButton.addEventListener("click", ()=> {
            window.classList.add("hide");
        })

        windowForm.appendChild(heading);
        windowForm.appendChild(removeProjectText);
        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(removeButton);
        windowForm.appendChild(buttonContainer);
        window.appendChild(windowForm);

        windowPopUp.show(button);
    }

    const viewMoreMenu = function(project, task, taskIndex, button) {
        removeAllChild(window);

        const heading = document.createElement("h2");
        heading.textContent = task.title;
        heading.classList.add("window-heading");

        const description = document.createElement("div");
        description.textContent = task.description;
        description.classList.add("window-text--multiline");

        const dueDate = document.createElement("span");
        dueDate.textContent = `Due date: ${task.dueDate}`;
        dueDate.classList.add("window-text");

        const priority = document.createElement("span");
        priority.textContent = `Priority: ${task.priority}`;
        priority.classList.add("window-text");

        const isDoneLabel = document.createElement("label");
        isDoneLabel.textContent = "Task done";
        isDoneLabel.classList.add("button--primary");
        isDoneLabel.setAttribute("for", "isDone");
        
        const isDoneInput = document.createElement("input");
        isDoneInput.classList.add("window-input-left");
        isDoneInput.setAttribute("type", "checkbox");
        isDoneInput.setAttribute("id", "isDone");
        
        if (task.isDone === true) {
            isDoneInput.checked = true;
        } else {
            isDoneInput.checked = false;
        }

        // toggles isDone property value
        isDoneInput.addEventListener("click", () => {
            task.isDone = !task.isDone;
            if (task.isDone === true) {
                isDoneInput.checked = true;
                localStorage.setItem("projectArray", JSON.stringify(projectArray));
            } else {
                isDoneInput.checked = false;
                localStorage.setItem("projectArray", JSON.stringify(projectArray));
            }
            displayTab.currentTab();
        })

        isDoneLabel.appendChild(isDoneInput);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("button--primary");
        deleteButton.textContent = "Delete task";
        deleteButton.setAttribute("type", "button");

        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon--no-hover");
        deleteIcon.classList.add("white-icon");

        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener("click", ()=> {
            project.removeTask(taskIndex);
            displayTab.currentTab();
            window.classList.add("hide");
        })

        const rowWrapper = document.createElement("span");
        rowWrapper.classList.add("window-row-wrapper");
        rowWrapper.appendChild(isDoneLabel);
        rowWrapper.appendChild(deleteButton);

        window.appendChild(heading);
        window.appendChild(description);
        window.appendChild(dueDate);
        window.appendChild(priority);
        window.appendChild(rowWrapper);

        windowPopUp.show(button);
    }

    return {editProjectMenu, newProjectMenu, newTaskMenu, removeProjectMenu, viewMoreMenu}
})();

export {displayMenu}