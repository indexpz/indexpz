document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const activeElements = document.querySelectorAll(".active");
    burger.addEventListener("click", function () {
        activeElements.forEach(el => el.classList.toggle("show"));
    })


    // const burger = document.querySelector(".burger");
    // const iconBurger = burger.querySelector(".fa-bars");
    // const iconX = burger.querySelector(".fa-times");
    // const column = document.querySelector("aside");
    // const wrapper = document.querySelector(".wrapper");
    // burger.addEventListener("click", showAsideNav);
    //
    // function showAsideNav() {
    //     iconBurger.classList.toggle("show");
    //     iconX.classList.toggle("show");
    //     column.classList.toggle("show");
    //     wrapper.classList.toggle("show");
    // }

});

// $(document).ready(function() {
//
//     $(".burger").on("click", function(){
//         $(".fas, aside, .wrapper").toggleClass("show");
//     })
//
// })