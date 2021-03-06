var game = function(gameID) {
    this.playerA = null;
    this.playerB = null;
    this.id = gameID;
    this.code = generateCode();
    this.line = 12;
};

game.prototype.hasTwoConnectedPlayers = function () {
    return this.playerA != null && this.playerB != null;
};

game.prototype.addPlayer = function (p) {
    if(this.playerA == null){
        this.playerA = p;
        return "A";
    }
    else if(this.playerB == null){
        this.playerB = p;
        return "B";
    }
};

game.prototype.getResult = function(guess){
    var correctplace = this.checkCorrect(guess);
    var correctcolor = this.checkAlmostCorrect(guess)-correctplace;

    return [correctplace, correctcolor];

}
game.prototype.checkCorrect = function(guess){
    var correct = 0;
    for (m = 0; m < 4; m++) {
        if (guess[m] === this.code[m]) {
            correct++;
        }
    }
    return correct;
}

game.prototype.checkAlmostCorrect = function(guess) {
    var almostCorrect = 0;

    for(i=0; i<4; i++){
        index = this.code.indexOf(guess[i])
        if(index < 4){
            almostCorrect++;
        }
    }
    return almostCorrect;
}


function generateCode() {
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