// removes every child of the container
function removeChild(container) {
    while(container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

export{removeChild};