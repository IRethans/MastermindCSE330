$(".cb img").on("click", function (event) {
    colorcode = makeCode();
    playerColor = ['wit', 'lb', 'db', 'roze'];
    var correct = checkCorrect(playerColor, colorcode);
    var almostCorrect = checkAlmostCorrect(playerColor, colorcode);
    alert(colorcode + " \n"+  playerColor + " \n"+ almostCorrect + " \n" + correct);

});


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



function checkCorrect(playerColor, colorcode){
    var correct = 0;
    for (m = 0; m < 4; m++) {
        if (playerColor[m] == colorcode[m]) {
            correct++;
        }
    }
    return correct;
}

function checkAlmostCorrect(playerColor, colorcode) {
    var almostCorrect = 0;

    for(i=0; i<4; i++){
        if(colorcode.indexOf(playerColor[i])!== -1){
            almostCorrect++;
        }
    }

 //       if (playerColor[0] == colorcode[1] || playerColor[0] == colorcode[2] || playerColor[0] == colorcode[3]) {
 //           almostCorrect++;
 //       }
 //       if (playerColor[1] == colorcode[0] || playerColor[1] == colorcode[2] || playerColor[1] == colorcode[3]) {
 //           almostCorrect++;
 //       }
 //       if (playerColor[2] == colorcode[0] || playerColor[2] == colorcode[1] || playerColor[2] == colorcode[3]) {
 //           almostCorrect++;
 //       }
 //       if (playerColor[3] == colorcode[0] || playerColor[3] == colorcode[1] || playerColor[3] == colorcode[2]) {
 //           almostCorrect++;
 //       }
    return almostCorrect;

}



function result(correct, almostCorrect) {
    //draw the white and black balls

    return nextAttempt();
}



function nextAttempt() {
    if (attempts >= maxAttempts) {
        return lost;
    } else {
        //move to the above row
        createPlayerColor();
    }
}



function createPlayerColor() {
    playerColor = [];



    return check(playerColor, colorcode);
}

