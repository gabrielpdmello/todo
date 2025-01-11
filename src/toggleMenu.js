function toggleMenu(button, menu) {
    document.addEventListener("click", e => {
        if (button.contains(e.target) && menu.classList.contains("hide")) {
          menu.classList.remove("hide");
        } else if (!menu.contains(e.target) && !menu.classList.contains("hide")) {
          menu.classList.add("hide");
        }
    });
}

export {toggleMenu}