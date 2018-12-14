var express = require("express");
var http = require("http");
var index = require("./routes/index");
var gameStatus = require("./statTracker");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
app.get("/game", index);
app.get("/", (req, res) =>{
  res.render("splash.ejs", {gamesPlayed: gameStatus.gamesPlayed});
});



http.createServer(app).listen(port);