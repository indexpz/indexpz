$(document).ready(function () {

    let nrJq = 1;

    $(`button.jq`).on('click', function () {
        const bgColor = `hsl(${Math.random() * 360}, 50%, 30%)`;
        $(`.space-for-squares`).append(`<div class="box-jq" style="background-color: ${bgColor}; color: white; text-align: center; line-height: 100px; font-size: 30px">${nrJq++} JQ`)
    });

    $(`button.reset`).on('click', () => {
        nrJq = 1
    })

})