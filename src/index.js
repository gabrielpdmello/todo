import "./styles.css";
import { displayTab } from "./displayTab.js";
import { toggleProjectList } from "./toggleProjectList.js";
import { windowPopUp } from "./windowPopUp.js";
import { setContentHeight } from "./setContentHeight.js";

setContentHeight();
window.addEventListener("resize", setContentHeight);
windowPopUp.hide();
toggleProjectList();
displayTab.projectList();
displayTab.setCurrentTab(displayTab.allProjects);
displayTab.currentTab();