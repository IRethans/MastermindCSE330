var currentline = 1;

$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById('line6rA').innerHTML = "<img src = 'images/rood.png'>";
});


var abcd = ["A", "B", "C", "D"];

for (var i=0; i<abcd.length; i++){
   var letter = "."+abcd[i];
    $(letter).on("click", function (event) {
        currentid = $(this).attr('id');
        document.getElementById(currentid).innerHTML = "<img src = 'images/game-ball.png'>";
    });
}



$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById('line1lD').innerHTML = "<img src = 'images/rood.png'>";
});




