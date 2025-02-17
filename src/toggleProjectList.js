const toggleProjectList = function() {
    const menuButton = document.querySelector(".project-list-toggle-button");
    const projectListContainer = document.querySelector(".project-list-container");
    const taskContainer = document.querySelector(".task-container");

    let jmediaquery = window.matchMedia("(max-width: 50em)");
    if (jmediaquery.matches) {
        projectListContainer.classList.add("hide");
    }

    window.addEventListener("resize", () => {
        if (!jmediaquery.matches) {
            projectListContainer.classList.remove("project-list-show");
            taskContainer.classList.remove("hide");
        } else if (jmediaquery.matches) {
            projectListContainer.classList.remove("hide");
        }
    });

    document.addEventListener("click", e => {
        if (jmediaquery.matches) {
            if (menuButton.contains(e.target) && projectListContainer.classList.contains("project-list-show")) {
                projectListContainer.classList.remove("project-list-show");
                taskContainer.classList.remove("hide");
            } else if (menuButton.contains(e.target) && !projectListContainer.classList.contains("project-list-show")) {
                projectListContainer.classList.add("project-list-show");
                taskContainer.classList.add("hide");
            }
        } else if (!jmediaquery.matches) {
            if (menuButton.contains(e.target) && projectListContainer.classList.contains("hide")) {
                projectListContainer.classList.remove("hide");
            } else if (menuButton.contains(e.target) && !projectListContainer.classList.contains("hide")) {
                projectListContainer.classList.add("hide");
            }
        }
    });
}

export {toggleProjectList}