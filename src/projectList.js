import { addProjectMethods } from "./addProjectMethods";

let projectList = JSON.parse(localStorage.getItem("projectList"));
console.log(projectList);

// if projectList is null, make it an empty array
if (!projectList) {
    projectList = [];
} else {
    projectList.forEach(project => {
        addProjectMethods(project, project.tasks);
    });
}

console.log(projectList);

export { projectList }