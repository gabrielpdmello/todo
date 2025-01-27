import { removeAllChild } from "./removeAllChild";
import { display } from "./display";
import { addEventShowWindow } from "./addEventShowWindow.js";

function displayViewMoreMenu(project, task, taskIndex, button) {
    const window = document.querySelector(".window");
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
      } else {
        isDoneInput.checked = false;
      }
      display.currentTab();
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
      display.allProjects();
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

    addEventShowWindow(button);
}

export {displayViewMoreMenu}