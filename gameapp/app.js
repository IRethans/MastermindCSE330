var express = require("express");
var http = require("http");
var index = require("./routes/index");
var gameStatus = require("./statTracker");
var websocket = require("ws");
var Game = require("./game");


var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
app.get("/play", index);
app.get("/", (req, res) =>{
  res.render("splash.ejs", {gamesPlayed: gameStatus.gamesPlayed});
});



var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};//property: websocket, value: game

setInterval(function() {
    for(let i in websockets){
        if(websockets.hasOwnProperty(i)){
            let gameObj = websockets[i];
            //if the gameObj has a final status, the game is complete/aborted
            if(gameObj.finalStatus!=null){
                console.log("\tDeleting element "+i);
                delete websockets[i];
            }
        }
    }
}, 50000);


var connectionID = 0;//each websocket receives a unique ID


wss.on("connection", function connection(ws) {

  var currentGame = new Game(gameStatus.gamesPlayed++);

  let con = ws; 
  con.id = connectionID++;
  let playerType = currentGame.addPlayer(con);
  websockets[con.id] = currentGame;



  console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

  if (currentGame.hasTwoConnectedPlayers()) {
    currentGame = new Game(gameStatus.gamesPlayed++);
}

});


server.listen(port);

