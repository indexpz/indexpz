$(document).ready(function () {
    console.log($('*'));
    console.log($('*').length);
    console.log($('.item1').text());
    console.log($('div').length);

    $("<div>").text("Div dodany przez jQuery").appendTo("body");

    const $p = $('p');
    console.log($p.length);
    console.log($p.html());
    console.log($p.text());

    const $paragrafText = $('p').text();
    $('p').text("Nowy tekst");
    $('p:nth-of-type(1)').text("Drugi nowy tekst");

    console.log($('html').html());

    console.log($('section').html());

    const $titleH1 = $('<h1 style="color: red" class=".title">Tytuł art</h1>');
    console.log($titleH1);
    $('div').before($titleH1);
    // $('div').after($titleH1);
    // $('div').prepend($titleH1);
    // $('div').append($titleH1);
    // $titleH1.prependTo('div');
    // $titleH1.appendTo('div');

// document.body.appendChild($titleH1[0]);

})
