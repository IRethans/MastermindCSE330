function make(){
  
    var colorCode1;
    var colorCode2;
    var colorCode3;
    var colorCode4;

    colors = ['red', 'green', 'yellow', 'blue', 'white', 'black']

    randomColor: function(){
        return colors[Math.floor(Math.random() colors.length)]
    }

    colorCode1 = randomColor;
    colors = colors - colorCode1;
    colorCode2 = randomColor;
    colors = colors - colorCode2;
    colorCode3 = randomColor;
    colors = colors - colorCode3;
    colorCode4 = randomColor;

}

function check(){
    var color1;
    var color2;
    var color3;
    var color4;

    

    if(color1 == colorCode1){
        correct++;
    }
    if(color2 == colorCode2){
        correct++;
    }
    if(color3 == colorCode3){
        correct++;
    }
    if(color4 == colorCode4){
        correct++;
    }
    if(correct == 4){
        return winner;
    }

    else{
        if(color1 == colorCode2 || color1 == colorCode3 || color1 == colorCode4){
            almostCorrect++;
        }
        if(color2 == colorCode1 || color2 == colorCode3 || color2 == colorCode4){
            almostCorrect++;
        }
        if(color3 == colorCode1 || color3 == colorCode2 || color3 == colorCode4){
            almostCorrect++;
        }
        if(color4 == colorCode1 || color4 == colorCode2 || color4 == colorCode3){
            almostCorrect++;
        }
    }



}