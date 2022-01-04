const buttons = document.querySelectorAll(".btn");
const section = document.querySelector("section");
const divs = section.querySelectorAll("div");


buttons[0].addEventListener("click", ev => {
    ev.propertyIsEnumerable()
    removeAddedClass();
    section.classList.toggle("addFlex");
    ev.classList.toggle("clicked");
})

buttons[1].addEventListener("click", ev => {
    ev.propertyIsEnumerable()
    removeAddedClass();
    section.classList.toggle("addInlineFlex");
    ev.classList.toggle("clicked");
})

function removeAddedClass() {
    buttons.forEach(el => {
        el.classList.remove("clicked");
        // section.classList.remove("addFlex");
        // section.classList.remove("addInlineFlex");
    })
}