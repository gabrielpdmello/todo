import { addProjectMethods } from "./addProjectMethods";

let projectArray = JSON.parse(localStorage.getItem("projectArray"));

// if projectArray is null, make it an empty array
if (!projectArray) {
    projectArray = [];
} else {
    projectArray.forEach(project => {
        addProjectMethods(project, project.tasks);
    });
}

export { projectArray }