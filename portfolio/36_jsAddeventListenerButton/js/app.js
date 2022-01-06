document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("button");
    const text = document.querySelector("p");
    let fontSizePx = window.getComputedStyle(text, null).getPropertyValue('font-size');
    let fontSize = parseFloat(fontSizePx);

// console.dir(p);
    buttons.forEach(el => {
        el.addEventListener("click", () => {
            if (el.className === "bigger") {
                fontSize++;
                text.style.fontSize = fontSize + "px";
            } else {
                fontSize--;
                text.style.fontSize = fontSize + "px";
            }
        })
    })
});