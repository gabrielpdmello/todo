// makes sure exactly 100% of the page height is used
const setContentHeight = function() {
    const header = document.querySelector("header");
    const content = document.querySelector(".content");

    let contentHeight = window.innerHeight - header.offsetHeight;
    content.style.height = `${contentHeight}px`;

};

export {setContentHeight}