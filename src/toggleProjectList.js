const toggleProjectList = function() {
    const menuButton = document.querySelector(".project-list-toggle-button");
    const projectListContainer = document.querySelector(".project-list-container");
    const taskContainer = document.querySelector(".task-container");

    let jmediaquery = window.matchMedia("(max-width: 50em)");

    window.addEventListener("resize", () => {
        if (!jmediaquery.matches) {
            projectListContainer.classList.remove("project-list-show");
            taskContainer.classList.remove("hide");
        } else if (jmediaquery.matches) {
            projectListContainer.classList.remove("project-list-hide");
        }
    });

    document.addEventListener("click", e => {
        if (jmediaquery.matches) {
            if (menuButton.contains(e.target) && projectListContainer.classList.contains("project-list-show")) {
                projectListContainer.classList.remove("project-list-show");
            } else if (menuButton.contains(e.target) && !projectListContainer.classList.contains("project-list-show")) {
                projectListContainer.classList.add("project-list-show");
            }
        } else if (!jmediaquery.matches) {
            if (menuButton.contains(e.target) && projectListContainer.classList.contains("project-list-hide")) {
                projectListContainer.classList.remove("project-list-hide");
                taskContainer.classList.remove("task-container-max-width");
            } else if (menuButton.contains(e.target) && !projectListContainer.classList.contains("project-list-hide")) {
                projectListContainer.classList.add("project-list-hide");
                taskContainer.classList.add("task-container-max-width");
            }
        }
    });
}

export {toggleProjectList}