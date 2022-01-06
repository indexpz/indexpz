document.addEventListener("DOMContentLoaded", () => {

    const divs = document.querySelectorAll("div");


    divs.forEach(div => {
        div.addEventListener("click", changeColor
        )
    })

    function changeColor() {
        this.classList.toggle("b-color");
        let randomColor =  '#'+Math.floor(Math.random()*16777215).toString(16);

        this.style.color = randomColor;
    }

});