// $(document).ready(function () {
//     $(document).on("scroll", changeText);
//
//     function changeText() {
//         const $ScrollTop = $(this).scrollTop();
//         console.log($ScrollTop);
//         const $sectionHeight1 = $('.sekcja1').height();
//         // const $sectionHeight1 = $('.sekcja1').innerHeight();
//         // const $sectionHeight1 = $('.sekcja1').outerHeight();
//         // const $sectionHeight1 = $('.sekcja1').outerHeight(true);
//         const $sectionHeight2 = $('.sekcja2').height();
//         const $sectionHeight3 = $('.sekcja3').height();
//         const $sectionHeight4 = $('.sekcja4').height();
//
//         const $distanceFromTop1 = $('.sekcja1').offset().top;
//         const $distanceFromTop2 = $('.sekcja2').offset().top;
//         const $distanceFromTop3 = $('.sekcja3').offset().top;
//         const $distanceFromTop4 = $('.sekcja4').offset().top;
//
//         if ($ScrollTop < $sectionHeight1) {
//             $('div.info').text("sekcja 1");
//         } else if ($ScrollTop <   $distanceFromTop2 +  $sectionHeight2) {
//             $('div.info').text("sekcja 2");
//         }else if ($ScrollTop <   $distanceFromTop3 +  $sectionHeight3) {
//             $('div.info').text("sekcja 3");
//         }else {
//             $('div.info').text("sekcja 4");
//         }
//     }
//
// })

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", changeText);
    const sectionsHeight = [];
    const sections = document.querySelectorAll("section");
    const info = document.querySelector(".info");

    sections.forEach(el => sectionsHeight.push(el.clientHeight));
    console.log(sectionsHeight);


    // const sectionTopOffset = [];
    // sections.forEach(el => sectionTopOffset.push(el.offsetTop));
    // console.log(sectionTopOffset);

    function changeText() {
        const scrollTop = window.scrollY;
        console.log(scrollTop);

        if (scrollTop < sectionsHeight[0]) {
            info.innerText = "sekcja 1";
        } else if (scrollTop < sectionsHeight[0] + sectionsHeight[1]) {
            info.innerText = "sekcja 2";
        } else if (scrollTop < sectionsHeight[0] + sectionsHeight[1]+ sectionsHeight[2]) {
            info.innerText = "sekcja 3";
        }else{
            info.innerText = "sekcja 4";
        }
    }

    }

)
    ;