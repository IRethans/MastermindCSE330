https://searchcode.com/codesearch/view/68566957/
https://codepen.io/yaylenny/pen/pJMepR

function makeCode() {
    colors = ['red', 'green', 'yellow', 'blue', 'white', 'black']
    colorcode = [];

    random = {
        randomColor: function () {
            return colors[Math.floor(Math.random() * colors.length)];
        }
    }

    for (n = 0; n < 4; n++) {
        colorcode[n] = random.randomColor;
        colors = colors - colorcode[n];
    }

    return colorcode;
}



function check(playerColor, colorcode) {
    for (m = 0; m < 4; m++) {
        if (playerColor[m] == colorcode[m]) {
            correct++;
        }
    }

    if (correct == 4) {
        return winner;
    } else {
        if (playerColor[0] == colorcode[1] || playerColor[0] == colorcode[2] || playerColor[0] == colorcode[3]) {
            almostCorrect++;
        }
        if (playerColor[1] == colorcode[0] || playerColor[1] == colorcode[2] || playerColor[1] == colorcode[3]) {
            almostCorrect++;
        }
        if (playerColor[2] == colorcode[0] || playerColor[2] == colorcode[1] || playerColor[2] == colorcode[3]) {
            almostCorrect++;
        }
        if (playerColor[3] == colorcode[0] || playerColor[3] == colorcode[1] || playerColor[3] == colorcode[2]) {
            almostCorrect++;
        }
    }

    return result(correct, almostCorrect);

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

