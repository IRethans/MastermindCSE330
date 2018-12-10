var countline = 12;
var cb_id = "";
var cb_source = "";
var playfield_id = "";
var cb_clicked = false;
var guess = ["", "", "", ""]; 


$(".cb img").on("click", function (event) {
    cb_id = $(this).attr('id');
    cb_source = $(this).attr('src');
    cb_clicked = true;
    document.getElementById(cb_id).style.opacity = 0.5;
});

 var abcd = ["A", "B", "C", "D"];

for (var i = 0; i < abcd.length; i++) {
    var letter = "." + abcd[i];

    $(letter).on("click", function () {
        playfield_id = $(this).attr('id');

        if (cb_clicked) {
            add_cb(playfield_id);
        }
        else {
            remove_cb(playfield_id)
        }
        
        var full = check_full();
        
        if (full){
            full_event();
        }

    });
}

function remove_cb(playfield_id) {
    if (checkline() && check_left(playfield_id)) {
        document.getElementById(playfield_id).innerHTML = "<img src = 'images/game-ball.png'>";
        var index = getclassindex(playfield_id);
        document.getElementById(guess[index]).style.display = "block";
        document.getElementById(guess[index]).style.opacity = 1;
        guess[index] = "";
        cb_clicked = false;
    }
}

function add_cb(playfield_id) {
    if (checkline() && check_left(playfield_id)) {
        document.getElementById(playfield_id).firstElementChild.setAttribute("src", cb_source);
        document.getElementById(cb_id).style.display = "none";
        var index = getclassindex(playfield_id);
        guess[index] = cb_id;
        cb_clicked = false;
    }
}

function checkline() {
    var clickline = parseInt(playfield_id.charAt(4));
    var clickline2 = playfield_id.charAt(5);
    if (clickline2 === "0" || clickline2 === "1" || clickline2 === "2") {
        clickline = parseInt("1" + clickline2);
    }
    if (clickline === countline) {
        return true;
    }
}

function check_left(playfield_id){
    return playfield_id.charAt(playfield_id.length-2) === "l";
}

function getclassindex(playfield_id) {
    var cb_class = document.getElementById(playfield_id).getAttribute("class");
        var index = abcd.indexOf(cb_class);
    return index;
}

function check_full(){
    for (var i=0; i<guess.length; i++){
        if (guess[i]===""){
            return false;
        }
    }
    return true;
}

function full_event(){
    check_code();
    
    for (var i=0; i<guess.length; i++){
    document.getElementById(guess[i]).style.opacity = 1;
    document.getElementById(guess[i]).style.display = "block";
    }

    for (var i=0; i<guess.length; i++){
        guess[i] = "";
    }

    countline--;
}

function check_code(){

}