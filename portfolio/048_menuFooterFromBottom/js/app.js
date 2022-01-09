$(document).ready(function () {
    $(".burger").on("click", function () {
        $(".menu, .fas").toggleClass("off");
    })
})

document.addEventListener("DOMContentLoaded", () => {

    const arrow = document.querySelector(".arrow");
    const actions = document.querySelectorAll(".action");

    arrow.addEventListener("click", move);

    function move() {

        actions.forEach(el=> el.classList.toggle("move"));
    }

});