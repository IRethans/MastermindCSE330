var currentline = 1;

$(".cb img").on("click", function (event) {
    currentid = $(this).attr('id');
    document.getElementById(currentid).setAttribute("src", "images/rood.png");
});


