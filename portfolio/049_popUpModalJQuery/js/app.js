$(document).ready(function (){
// $("button").on("click", function () {
//     $(".modal-wrap, .modal").addClass("active");
//     $(".article").addClass("blur");
// })
//     $(".hide").on("click",function(){
//         $(".modal-wrap, .modal").removeClass("active");
//         $(".article").removeClass("blur");
//     })

    $("button, .hide").on("click", function () {
        $(".modal-wrap, .modal").toggleClass("active");
        $(".article").toggleClass("blur");
    })
})


// document.addEventListener("DOMContentLoaded", ()=>{
//
//     const button = document.querySelector("button");
//     const x = document.querySelector(".hide");
//
//     button.addEventListener("click", action);
//     x.addEventListener("click", action);
//
//     function action() {
//         document.querySelector(".modal-wrap").classList.toggle("active");
//         document.querySelector(".modal").classList.toggle("active");
//         document.querySelector(".article").classList.toggle("blur");
//     }
// });