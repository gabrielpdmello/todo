const setContentHeight = function() {
    const header = document.querySelector("header");
    const content = document.querySelector(".content");

    let contentHeight = window.innerHeight - header.offsetHeight;
    content.style.height = `${contentHeight}px`;

};

export {setContentHeight}