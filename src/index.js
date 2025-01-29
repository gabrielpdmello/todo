import "./styles.css";
import { newProject } from "./newProject.js";
import { projectList } from "./projectList.js";
import { display } from "./display.js";

const window = document.querySelector(".window");

// hide window when user clicks or tabs outside of window
["click", "focusin", "blur"].forEach(ev => {
  document.addEventListener(ev, e => {
    if (!window.contains(e.target) && !window.classList.contains("hide")) {
      window.classList.add("hide");
    }
  })
})

display.projectList();
display.setCurrentTab(display.allProjects);
display.currentTab();