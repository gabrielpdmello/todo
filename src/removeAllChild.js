// removes every child of the container
function removeAllChild(container) {
    while(container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

export{removeAllChild};