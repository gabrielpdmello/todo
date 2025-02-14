const windowPopUp = (function() {
    const window = document.querySelector(".window");

    // displays window pop up when specified button is clicked
    function show(button) {
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
    }

    // hide window when user clicks or tabs outside of window
    function hide() {
        ["click", "focusin", "blur"].forEach(ev => {
            document.addEventListener(ev, e => {
                if (!window.contains(e.target) && !window.classList.contains("hide")) {
                    window.classList.add("hide");
                }
            })
        })
    }

    return {show, hide}
})();

export {windowPopUp}
