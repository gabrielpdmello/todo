import { removeAllChild } from "./removeAllChild";
import { display } from "./display";

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

    const isDoneWrapper = document.createElement("span");
    isDoneWrapper.classList.add("button--primary");

    const isDoneText = document.createElement("span");
    isDoneText.textContent = "Task done";
    
    const isDoneInput = document.createElement("input");
    isDoneInput.setAttribute("type", "checkbox");
    // toggles isDone property value
    isDoneInput.addEventListener("click", () => {
      task.isDone = !task.isDone;
      isDoneInput.checked = !isDoneInput.checked;
      display.allProjects();
    })
    if (task.isDone === true) {
      isDoneInput.checked = true;
    } else {
      isDoneInput.checked = false;
    }

    isDoneWrapper.appendChild(isDoneInput);
    isDoneWrapper.appendChild(isDoneText);

    isDoneWrapper.addEventListener("click", ()=> {
      task.isDone = !task.isDone;
      isDoneInput.checked = !isDoneInput.checked;
      display.allProjects();
    })

    const deleteWrapper = document.createElement("span");
    deleteWrapper.classList.add("button--primary");

    const deleteText = document.createElement("span");
    deleteText.textContent = "Delete task";

    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("delete-icon--no-hover");
    deleteIcon.classList.add("white-icon");

    deleteWrapper.appendChild(deleteText);
    deleteWrapper.appendChild(deleteIcon);

    deleteWrapper.addEventListener("click", ()=> {
      project.removeTask(taskIndex);
      display.allProjects();
      window.classList.add("hide");
    })

    const rowWrapper = document.createElement("span");
    rowWrapper.classList.add("window-row-wrapper");
    rowWrapper.appendChild(isDoneWrapper);
    rowWrapper.appendChild(deleteWrapper);

    window.appendChild(heading);
    window.appendChild(description);
    window.appendChild(dueDate);
    window.appendChild(priority);
    window.appendChild(rowWrapper);

    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
          window.classList.remove("hide");
          isDoneInput.focus();
        }
    });
}

export {displayViewMoreMenu}