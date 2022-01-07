document.addEventListener("DOMContentLoaded", () => {

    const js = document.querySelector(".js");
    const reset = document.querySelector(".reset");
    const spaceForSquares = document.querySelector(".space-for-squares");
    let nr = 0;

    js.addEventListener("click", addSquare);


    function addSquare() {
        nr++;
        const square = document.createElement("div");
        // square.style.width = "100px";
        // square.style.height = "100px";

        square.style.textAlign = "center";
        square.style.lineHeight = "100px";
        square.style.fontSize = "30px";
        square.style.fontWeight = "600";
        square.style.color = "black";

        // square.style.display = "inline-block";
        // square.setAttribute("class", "test");
        square.style.background = `hsl(${Math.random() * 360}, 100%, 90%)`;
        square.classList.add(`box`);
        square.innerHTML = `<p>${nr}</p>`
        spaceForSquares.appendChild(square);
    }

    reset.addEventListener("click", () => {
        spaceForSquares.innerHTML = "";
        nr = 0;
    })

});