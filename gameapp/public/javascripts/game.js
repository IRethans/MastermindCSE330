var countline = 12;
var cb_id = "";
var cb_source = "";
var playfield_id = "";
var cb_clicked = false;
var guess = ["", "", "", ""]; 
var socket;

function makeCode() {
    colors = ['wit', 'lb', 'db', 'roze', 'paars', 'rood']
    colorcode = [];


    function shuffle(colors) {
        var j, x, i;
        for (i = colors.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = colors[i];
            colors[i] = colors[j];
            colors[j] = x;
        }
        return colors;
    }

colorcode = shuffle(colors);

    //colorcode = ['wit', 'lb', 'db', 'roze'];

    return colorcode;
}

var code = makeCode();

$(".cb img").on("click", function (event) {
    if(cb_clicked){
        document.getElementById(cb_id).style.opacity = 1;
    }
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
        cb_id = "";
    }
}

function add_cb(playfield_id) {
    if (checkline() && check_left(playfield_id)) {
        document.getElementById(playfield_id).firstElementChild.setAttribute("src", cb_source);
        document.getElementById(cb_id).style.display = "none";
        var index = getclassindex(playfield_id);
        if (guess[index] !== ""){
        lightup(index);
        }
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
    var correct = check_code();
    socket.send(JSON.stringify(guess));

    console.log(code);
    
    for (var i=0; i<guess.length; i++){
    lightup(i);
    }

    for (var i=0; i<guess.length; i++){
        guess[i] = "";
    }

    if (correct === 4){
        win_lose("won");
    }

    countline--;

    if (countline === 0 ){
        win_lose("lost");
    }
}

function check_code(){
    var correctplace = checkCorrect();
    var correctcolor = checkAlmostCorrect()-correctplace;
    var tracker = 1;

    for (var i=1; i<=correctplace; i++){
        var id = "check"+countline+"."+i+"l";
        document.getElementById(id).firstElementChild.setAttribute("src", "images/small-black.png");
        document.getElementById(id).firstElementChild.style.display = "block";
        tracker++;
    }

    for (var n=0; n<correctcolor; n++){
        var id2 = "check"+countline+"."+tracker+"l";
        document.getElementById(id2).firstElementChild.setAttribute("src", "images/small-white.png");
        document.getElementById(id2).firstElementChild.style.display = "block";
        tracker++;
    }

    return correctplace;
}

function lightup(index){
    document.getElementById(guess[index]).style.opacity = 1;
    document.getElementById(guess[index]).style.display = "block";
}

function checkCorrect(){
    var correct = 0;
    for (m = 0; m < 4; m++) {
        if (guess[m] === code[m]) {
            correct++;
        }
    }
    return correct;
}

function checkAlmostCorrect() {
    var almostCorrect = 0;

    for(i=0; i<4; i++){
        index = code.indexOf(guess[i])
        if(index < 4){
            almostCorrect++;
        }
    }
    return almostCorrect;
}


function win_lose(win_lose){
    document.getElementById("text").innerHTML = "You " + win_lose;
    var loseScreen = document.getElementById('loseScreen');
    loseScreen.style.display = "block";
}


(function setup(){
    socket = new WebSocket("ws://localhost:3000");
    
    socket.onmessage = function (event) {
        var message = JSON.parse(event);
        
        
    };
  
    socket.onopen = function(){
      //  socket.send("{}");
    };
    
    //server sends a close event only if the game was aborted from some side
    socket.onclose = function(){
        if(gs.whoWon()==null){
            sb.setStatus(Status["aborted"]);
        }
    };
  
    socket.onerror = function(){  
    };
  })(); //execute immediately
