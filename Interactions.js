var currentline = 1;

$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById('line6rA').innerHTML = "<img src = 'images/rood.png'>";
});



$(".A").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById(currentid).innerHTML = "<img src = 'images/game-ball.png'>";
});
$(".B").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById(currentid).innerHTML = "<img src = 'images/game-ball.png'>";
});
$(".C").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById(currentid).innerHTML = "<img src = 'images/game-ball.png'>";
});
$(".D").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById(currentid).innerHTML = "<img src = 'images/game-ball.png'>";
});



$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById('line1lD').innerHTML = "<img src = 'images/rood.png'>";
});