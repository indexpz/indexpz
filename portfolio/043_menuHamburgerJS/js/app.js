document.addEventListener("DOMContentLoaded", ()=>{

    const burger = document.querySelector(".burger");
    burger.addEventListener("click", showAsideNav);

    function showAsideNav() {
        burger.classList.toggle("active");
    }

});