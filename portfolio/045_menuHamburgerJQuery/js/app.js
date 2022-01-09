// document.addEventListener("DOMContentLoaded", () => {
//
//     const burger = document.querySelector(".burger");
//     const iconBurger = burger.querySelector(".fa-bars");
//     const iconX = burger.querySelector(".fa-times");
//     const column = document.querySelector("aside");
//     burger.addEventListener("click", showAsideNav);
//
//     function showAsideNav() {
//         iconBurger.classList.toggle("show");
//         iconX.classList.toggle("show");
//         column.classList.toggle("show");
//     }
//
// });

$(document).ready(function() {

    $(".burger").on("click", function(){
        $(".fas, aside").toggleClass("show");
    })

})