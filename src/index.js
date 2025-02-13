import "./styles.css";
import { display } from "./display.js";
import { toggleProjectList } from "./toggleProjectList.js";

const window = document.querySelector(".window");

// hide window when user clicks or tabs outside of window
["click", "focusin", "blur"].forEach(ev => {
  document.addEventListener(ev, e => {
    if (!window.contains(e.target) && !window.classList.contains("hide")) {
      window.classList.add("hide");
    }
  })
})

toggleProjectList();
display.projectList();
display.setCurrentTab(display.allProjects);
display.currentTab();