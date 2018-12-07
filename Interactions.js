var currentline = 1;
var currentsrc = "";

$(".cb img").click(function (event) {
    currentsrc = $(this).attr('src');
}, function(){
        currentid = $(this).attr('id');
        document.getElementById(currentid).innerHTML = "<img src = '" + currentsrc + "'>";
});

function insertBall(currentsrc){
        $(".gamefield").on("click", function (event) {
            currentid = $(this).attr('id');
            document.getElementById(currentid).innerHTML = "<img src = '" + currentsrc + "'>";
        });
       
}

insertBall(currentsrc);



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