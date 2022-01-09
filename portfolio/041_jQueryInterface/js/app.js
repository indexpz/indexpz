$(document).ready(function () {
    // $('.orange, .green, .increase, .move');
    const $div = $('.interface');
    $div.on("click", function () {
        // console.log("klik");
        // console.log(this);
        // console.log($(this));
        // console.log($(this).attr("class"));
        // console.log(this.className);

        if ($(this).hasClass("orange")) {
            $("body").attr("class", "");
            $("body").addClass( "orange");
            // $("body").css({
            //     "background-color": "orange",
            //     "color": "green"
            // });
            // $(".text").css({
            //     "color": "green"
            // })
        }
        if ($(this).hasClass("green")) {
            // $("body").css("background-color", "green");
            $("body").attr("class", "");
            $("body").addClass( "green");
            // $(".text").css({
            //     "color": "orange",
                // "font-size": "64px"
            // })
        }
        if ($(this).hasClass("increase")) {
            // console.log($(".text").css("font-size"));
            $(".text").animate({
                "font-size": "+=10px"
            },200);
        }
        if ($(this).hasClass("move")){
            $(".text").animate({
                "left": "+=10px",
                "letter-spacing": "+=3px"
            },200);
        }
        if ($(this).hasClass("reset")){
            $(".text").animate({
                "left": "50%",
                "letter-spacing": "0",
                "font-size": "64px",
                "color": "white"
            },200);
           $("body").attr("class","");
            $(".text").attr("class","");
        }

    })
})
