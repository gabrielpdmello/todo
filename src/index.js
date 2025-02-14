import "./styles.css";
import { display } from "./display.js";
import { toggleProjectList } from "./toggleProjectList.js";
import { windowPopUp } from "./windowPopUp.js";

windowPopUp.hide();
toggleProjectList();
display.projectList();
display.setCurrentTab(display.allProjects);
display.currentTab();