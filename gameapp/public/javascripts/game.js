var countline = 13;
var countlineopp = 13;
var cb_id = "";
var cb_source = "";
var playfield_id = "";
var cb_clicked = false;
var guess = ["", "", "", ""];
var socket;
var sound = true;
var info = document.getElementById("info");
var fullscreen = false;
var inst = false;


$("#cl.cb img").on("click", function (event) {
    if (cb_clicked) {
        document.getElementById(cb_id).style.opacity = 1;
    }
    cb_id = $(this).attr('id');
    cb_source = $(this).attr('src');
    cb_clicked = true;
    document.getElementById(cb_id).style.opacity = 0.5;
});

$("#fulls").on("click", function () {
    var elem = document.documentElement;
    if (!fullscreen){
        openFullscreen(elem);
        fullscreen = true;
    } else {
        closeFullscreen(elem);
        fullscreen = false;
    }
});

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        if (fullscreen){
            fullscreen = false;
            closeFullscreen();
        }
   }
});


$("#instr").on("click", function () {
    if (!inst){
    document.getElementById("instructies").style.display = "block";
    document.getElementById("logo").innerHTML = "<img src = 'images/logoinv.png'>"
    inst = true;
    }
    else {
    document.getElementById("instructies").style.display = "none";
    document.getElementById("logo").innerHTML = "<img src = 'images/logo.png'>"
    inst = false;
    } 
});

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  function closeFullscreen(elem) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }


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

        if (full) {
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
        if (guess[index] !== "") {
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

function check_left(playfield_id) {
    return playfield_id.charAt(playfield_id.length - 2) === "l";
}

function getclassindex(playfield_id) {
    var cb_class = document.getElementById(playfield_id).getAttribute("class");
    var index = abcd.indexOf(cb_class);
    return index;
}

function check_full() {
    for (var i = 0; i < guess.length; i++) {
        if (guess[i] === "") {
            return false;
        }
    }
    return true;
}

function full_event() {
    socket.send(JSON.stringify(guess));
    checkSound.play();

    for (var i = 0; i < guess.length; i++) {
        lightup(i);
    }

    for (var i = 0; i < guess.length; i++) {
        guess[i] = "";
    }

}

function lightup(index) {
    document.getElementById(guess[index]).style.opacity = 1;
    document.getElementById(guess[index]).style.display = "block";
}


function showResult(result, side, line) {
    var correctplace = result[0];
    var correctcolor = result[1];
    var tracker = 1;

    for (var i = 1; i <= correctplace; i++) {
        var id = "check" + line + "." + i + side;
        document.getElementById(id).firstElementChild.setAttribute("src", "images/small-black.png");
        document.getElementById(id).firstElementChild.style.display = "block";
        tracker++;
    }

    for (var n = 0; n < correctcolor; n++) {
        var id2 = "check" + line + "." + tracker + side;
        document.getElementById(id2).firstElementChild.setAttribute("src", "images/small-white.png");
        document.getElementById(id2).firstElementChild.style.display = "block";
        tracker++;
    }

}


function popup(text) {
    document.getElementById("text").innerHTML = text;
    var popup = document.getElementById('popUpScreen');
    popup.style.display = "block";
}

(function setup() {
    socket = new WebSocket("ws://localhost:3000");

    socket.onmessage = function (message) {
        console.log(message);

        if (message.data == "A") {
            info.innerText = "waiting for opponent...";
        } else if (message.data == "start") {
            info.innerText = "Play!";
            setTimeout(function () {
                info.innerText = "";
            }, 5000);
            countline--;
            countlineopp--;
            startTimer();
        } else if(message.data == "closeOpp"){
            info.innerText = "Oops, connection with opponent is lost, please reload page";
        } else {
            var objresult = JSON.parse(message.data);
            messageSound.play();

            if (objresult.type == "you") {
                showResult(objresult.result, "l", countline);
                if (objresult.winner) {
                    stopTimer();
                    winmessage();
                } else {
                    countline--;
                    document.getElementById("countline").innerText = countline;
                    if (countline == 0) {
                        socket.send("lost");
                    }
                }
            } else {
                showResult(objresult.result, "r", countlineopp);
                if (objresult.winner) {
                    stopTimer();
                    losemessage();
                } else {
                    for (let i = 0; i < 4; i++) {
                        let id = "line" + countlineopp + "r" + abcd[i];
                        document.getElementById(id).firstElementChild.setAttribute("src", "/images/game-ball-inserted.png");
                    }
                    countlineopp--;
                }
            }
        }
    }

    socket.onopen = function () {
        console.log("connection opened");
    };

    //server sends a close event only if the game was aborted from some side
    socket.onclose = function () {
        info.innerHTML = "Oops your connection is closed, please try to reload the page";
    };


    socket.onerror = function () {
        stopTimer();
    };
})(); //execute immediately


function startTimer() {
    var seconds = 0;
    timer = setInterval(function () {
        seconds++;
        var sec = seconds % 60;
        var minutes = parseInt(seconds / 60);
        if (sec < 10) {
            document.getElementById("seconds").innerText = "0" + sec;
        } else {
            document.getElementById("seconds").innerText = seconds % 60;
        }

        if (minutes < 10) {
            document.getElementById("minutes").innerText = "0" + minutes;
        } else {
            document.getElementById("minutes").innerText = minutes;
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function winmessage() {
    info.innerHTML = "YOU WIN! CONGRATS!";
}

function losemessage() {
    info.innerHTML = "YOU LOSE";
}


