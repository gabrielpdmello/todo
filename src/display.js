import { displayAllProjects } from "./displayAllProjects";
import { displayEditProjectMenu } from "./displayEditProjectMenu";
import { displayNewProjectMenu } from "./displayNewProjectMenu";
import { displayNewTaskMenu } from "./displayNewTaskMenu";
import { displayProject } from "./displayProject";
import { displayProjectList } from "./displayProjectList";
import { displayRemoveProjectMenu } from "./displayRemoveProjectMenu";
import { displayTask } from "./displayTask";
import { displayViewMoreMenu } from "./displayViewMoreMenu";

// Everything related to DOM will be a method of display module
const display = (function() {
    let current;
    
    function currentTab() {
        if (current) {
            current();
        } else {
            alert(`Error: tab ${current}`);
        }
    }

    function setCurrentTab(tab) {
        current = tab;
    }

    const allProjects = displayAllProjects;

    const project = displayProject;

    const editProjectMenu = displayEditProjectMenu;

    const newProjectMenu = displayNewProjectMenu;

    const newTaskMenu = displayNewTaskMenu;

    const projectList = displayProjectList;

    const removeProjectMenu = displayRemoveProjectMenu;

    const task = displayTask;

    const viewMoreMenu = displayViewMoreMenu;

    return {currentTab, setCurrentTab, allProjects, project, editProjectMenu, newProjectMenu, newTaskMenu, projectList, removeProjectMenu,task, viewMoreMenu}
})();

export { display}