$(document).ready(function () {

    $(document).on('scroll', function () {

        const windowHeight = $(window).height();
        const scrollValue = $(this).scrollTop();

        const $art2 = $(".art2");
        const art2FromTop = $art2.offset().top;
        const art2Height = $art2.outerHeight();

        const $art3 = $(".art3");
        const art3FromTop = $art3.offset().top;
        const art3Height = $art3.outerHeight();

        const $art4 = $(".art4");
        const art4FromTop = $art4.offset().top;
        const art4Height = $art4.outerHeight();

        const $op1 = $(".op1");
        const op1FromTop =  $op1.offset().top;
        const op1Height =  $op1.outerHeight();

        const $op2 = $(".op2");
        const op2FromTop =  $op2.offset().top;
        const op2Height =  $op2.outerHeight();

        if (scrollValue > art2FromTop + art2Height - windowHeight) {
            console.log("jestem");
            $art2.addClass("active");
        }
        if(scrollValue > art3FromTop + art3Height - windowHeight){
            $art3.addClass("active");
        }
        if(scrollValue > art4FromTop + art4Height - windowHeight){
            $art4.addClass("active");
        }

        if(scrollValue > op1FromTop - windowHeight){
            $op1.addClass("active");
        }

        if(scrollValue > op2FromTop  - windowHeight){
            $op2.addClass("active");
        }

        if(scrollValue < 50){
            $("article").removeClass("active");
        }
    })

})