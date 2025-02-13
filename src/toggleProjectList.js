const toggleProjectList = function() {
    const menuButton = document.querySelector(".project-list-toggle");
    const body = document.querySelector("body");

    document.addEventListener("click", e => {
        if (menuButton.contains(e.target) && body.classList.contains("project-list-hide")) {
            body.classList.remove("project-list-hide");
        } else if (menuButton.contains(e.target) && !body.classList.contains("project-list-hide")) {
            body.classList.add("project-list-hide");
        }
    });
}

export {toggleProjectList}