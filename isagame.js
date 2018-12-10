var countline = 1;
var cb_id = "";
var cb_source = "";
var playfield_id = "";
var cb_clicked = false;

$(".cb img").on("click", function (event) {
    cb_id = $(this).attr('id');
    cb_source = $(this).attr('src');
    cb_clicked = true;
    document.getElementById(cb_id).style.opacity = 0.5;
});

//removing a colored ball from the playfield in the current active line.
var abcd = ["A", "B", "C", "D"];

for (var i = 0; i < abcd.length; i++) {
    var letter = "." + abcd[i];
    
    $(letter).on("click", function (event) {
    playfield_id = $(this).attr('id');
    
    if (cb_clicked === false){  
    add_cb(event, playfield_id);
    }
    else{
    remove_cb(event, playfield_id)   
    }


    });
}

function remove_cb(event, playfield_id){
if (checkline()) {
    document.getElementById(playfield_id).innerHTML = "<img src = 'images/game-ball.png'>";
}
}

function add_cb(event, playfield_id){
    if (checkline()) {
    document.getElementById(cb_id).setAttribute("src", cb_source);
    }
    }

function checkline(){
    var clickline = parseInt(playfield_id.charAt(4));
    var clickline2 = playfield_id.charAt(5);
    if (clickline2 === "1" || clickline2 === "2") {
        clickline = parseInt("1" + clickline2);
    }
    if (clickline === countline) {
        return true;
    }
}

//document.getElementById('line6rA').innerHTML = "<img src = 'images/rood.png'>";


$(".cb img").on("click", function (event) {
    cb_id = $(this).attr('id');
    document.getElementById('line1lD').innerHTML = "<img src = 'images/rood.png'>";
});

//document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");


//