const btn = document.querySelector("button");
const square = document.querySelector(".square");
let rotateDeg = 5;

btn.addEventListener("click", () => {
    rotateSquare();
});


function rotateSquare() {
    square.style.transform = `rotate(${rotateDeg}deg)`;
    rotateDeg += 5;
    let randomColor =  '#'+Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = randomColor;
}

square.style.transition = "0.5s ease";