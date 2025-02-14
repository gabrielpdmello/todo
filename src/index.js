import "./styles.css";
import { displayTab } from "./displayTab.js";
import { toggleProjectList } from "./toggleProjectList.js";
import { windowPopUp } from "./windowPopUp.js";

windowPopUp.hide();
toggleProjectList();
displayTab.projectList();
displayTab.setCurrentTab(displayTab.allProjects);
displayTab.currentTab();