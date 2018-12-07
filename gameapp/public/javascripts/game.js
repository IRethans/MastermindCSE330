var currentline = 1;

$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById('line6rA').innerHTML = "<img src = 'images/rood.png'>";
});


<<<<<<< HEAD
var abcd = ["A", "B", "C", "D"];

for (var i=0; i<abcd.length; i++){
   var letter = "."+abcd[i];
    $(letter).on("click", function (event) {
        currentid = $(this).attr('id');
        document.getElementById(currentid).innerHTML = "<img src = 'images/game-ball.png'>";
    });
}
=======


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
>>>>>>> 871a39afe5d9cf1ac37f09500a99c1187166c60b



$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById('line1lD').innerHTML = "<img src = 'images/rood.png'>";
});




