function game(gameID) {
    this.playerA = null;
    this.playerB = null;
    this.id = gameID;
    this.code = generateCode();
    this.line = 12;
};

game.prototype.hasTwoConnectedPlayers = function () {
    return playerA != null && playerB != null;
};

game.prototype.addPlayer = function (p) {
    if(playerA == null){
        playerA = p;
    }
    else if(playerB == null){
        playerB = p;
    }
};

game.prototype.guessCode = function(guess){
    var correctplace = checkCorrect(guess);
    var correctcolor = checkAlmostCorrect(guess)-correctplace;

    return [correctplace, correctcolor];

}

function checkCorrect(guess){
    var correct = 0;
    for (m = 0; m < 4; m++) {
        if (guess[m] === this.code[m]) {
            correct++;
        }
    }
    return correct;
}

function checkAlmostCorrect(guess) {
    var almostCorrect = 0;

    for(i=0; i<4; i++){
        index = this.code.indexOf(guess[i])
        if(index < 4){
            almostCorrect++;
        }
    }
    return almostCorrect;
}


game.prototype.generateCode = function () {
        var colors = ['wit', 'lb', 'db', 'roze', 'paars', 'rood']
        var colorcode = [];
    
    
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
    
    
        return colorcode;
};



module.exports = game;