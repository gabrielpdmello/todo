function addEventShowWindow(button) {
    const window = document.querySelector(".window");
    document.addEventListener("click", e => {
        if (button.contains(e.target) && window.classList.contains("hide")) {
            window.classList.remove("hide");
            const firstInput = document.querySelector(".window input:first-of-type");
            const firstButton = document.querySelector(".window button:first-of-type");
            if (firstInput) {
                firstInput.focus();
            } else if (firstButton) {
                firstButton.focus();
            }
        };
    });
};

export {addEventShowWindow}
