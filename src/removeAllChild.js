// removes every child of the container
const removeAllChild = function (container) {
    while(container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

export{removeAllChild};