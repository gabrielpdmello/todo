import { displayAllProjects } from "./displayAllProjects";
import { removeAllChild } from "./removeAllChild";

// show all task's info on a div
function viewMore(project, task, taskIndex, button) {
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

    const isDoneLabel = document.createElement("label");
    isDoneLabel.textContent = "Task done";
    isDoneLabel.setAttribute("for", "isDone");
    
    const isDoneInput = document.createElement("input");
    isDoneInput.setAttribute("type", "checkbox");
    isDoneInput.setAttribute("id", "isDone");
    // toggles isDone property value
    isDoneInput.addEventListener("click", () => {
      task.isDone = !task.isDone;
      displayAllProjects();
    })
    if (task.isDone === true) {
      isDoneInput.checked = true;
    } else {
      isDoneInput.checked = false;
    }

    isDoneWrapper.appendChild(isDoneInput);
    isDoneWrapper.appendChild(isDoneLabel);

    const deleteWrapper = document.createElement("span");
    deleteWrapper.classList.add("button--primary");

    const deleteText = document.createElement("span");
    deleteText.textContent = "Delete task";

    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.classList.add("white-icon");

    deleteWrapper.appendChild(deleteText);
    deleteWrapper.appendChild(deleteIcon);

    deleteWrapper.addEventListener("click", ()=> {
      project.removeTask(taskIndex);
      displayAllProjects();
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
        }
    });
}

export {viewMore}