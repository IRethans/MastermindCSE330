var currentline = 1;

$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById(currentid).setAttribute("src", "images/rood.png");
});

$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
   document.getElementById('line1lA').innerHTML = "<img src = 'images/rood.png'>"
});

var currentline = 1;
var currentsource = ""

$(".cb img").on("click", function (event) {
    currentsource = $(this).attr('src');
    document.getElementById('line6rA').innerHTML = "<img src = 'images/rood.png'>";
});

if (currentsource != ""){
    $(".A").on("click", function (event) {
        id = $(this).attr('id');
        document.getElementById(id).innerHTML = "<img src = '" + currentsource + "'>";
        currentsource = ""
    });
}

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




