$(document).ready(function () {


    $(document).on('scroll', function () {
        // console.log("document " + $(this).scrollTop());
        // console.log("window " + $(window).scrollTop());
        const $info = $('div.info');

        $info.text("Obecna pozycja scroll'a: " + $(document).scrollTop().toFixed() + " px");


        if ($(document).scrollTop() > 200) {
            $info.addClass("active");
        } else {
            $info.removeClass("active");
        }

    })


})