var express = require("express");
var http = require("http");
var index = require("./routes/index");
var gameStatus = require("./statTracker");
var websocket = require("ws");
var game = require("./game");


var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
app.get("/play", index);
app.get("/", (req, res) =>{
  res.render("splash.ejs", {gamesPlayed: gameStatus.gamesPlayed});
});



var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};
var connectionID = 0;//each websocket receives a unique ID
var gamecount = 0;
var currentGame = new game(gamecount);


wss.on("connection", function connection(ws) {
    console.log("connection established");
    ws.send("Welcome to this game");

if(currentGame.hasTwoConnectedPlayers){
    gamecount++;
    currentGame = new game(gamecount);
}

  

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

