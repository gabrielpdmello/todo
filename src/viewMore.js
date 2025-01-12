// show all of task's info on a div

const taskInfo = document.createElement("div");
const title = document.createElement("h3");
const description = document.createElement("span");
const dueDate = document.createElement("span");
const priority = document.createElement("span");
const checkbox = document.createElement("input");
const deleteIcon = document.createElement("span");

title.textContent = task.title;
description.textContent = task.description;
dueDate.textContent = task.dueDate;
priority.textContent = `Priority: ${task.priority}`;
checkbox.setAttribute("type", "checkbox");
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
project.removeTask(index);
})


taskInfo.appendChild(title);
taskInfo.appendChild(description);
taskInfo.appendChild(dueDate);
taskInfo.appendChild(priority);
taskInfo.appendChild(checkbox);
taskInfo.appendChild(deleteIcon);
document.appendChild(taskInfo);
