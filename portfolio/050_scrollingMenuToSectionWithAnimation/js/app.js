$(document).ready(function(){
    // $('.me').on("click", function(){
    //     $('body, html').animate({'scrollTop': $('.s1').offset().top}, 500)
    // })
    //
    // console.log($('.s3').offset().top);
    //
    // $('.portfolio').on("click", function (){
    //     $('body, html').animate({'scrollTop':$('.s2').offset().top}, 500)
    // })

    // $('nav a').on("click", function(){
    //     $('body, html').animate({'scrollTop':  $("#"+$(this).attr("class")).offset().top},500)
    // })

    $('nav a').on("click", function(){
        $('body, html').animate({'scrollTop':  $("[data-section="+$(this).attr("class")+"]").offset().top},500)
    })
})