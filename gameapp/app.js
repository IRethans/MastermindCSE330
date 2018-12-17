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
app.get("/", (req, res) => {
    res.render("splash.ejs", { gamesInitialized: gameStatus.gamesInitialized, gamesCompleted: gameStatus.gamesCompleted, guessesMade: gameStatus.guessesMade });
});



var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};
var connectionID = 0;//each websocket receives a unique ID
var gamecount = 0;
var currentGame = new game(gamecount);


wss.on("connection", function connection(ws) {
    console.log("connection established");

    if (currentGame.hasTwoConnectedPlayers()) {
        gamecount++;
        currentGame = new game(gamecount);
    }

    let con = ws;
    con.id = connectionID++;
    let playerType = currentGame.addPlayer(con);
    websockets[con.id] = currentGame;

    console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

    if (currentGame.hasTwoConnectedPlayers()) {
        currentGame.playerA.send("start");
        currentGame.playerB.send("start");
        gameStatus.gamesInitialized++;
    } else {
        con.send("A");
    }
    ws.on("message", function (JSONguess) {
        let gameObj = websockets[con.id];
        if (gameObj.hasTwoConnectedPlayers()) {
            if (JSONguess == "lost") {
                winner = true;
                gameStatus.gamesCompleted++;

                var resYou = {
                    "type": "you",
                    "result": result,
                    "winner": winner
                }
                var resOpp = {
                    "type": "opponent",
                    "result": result,
                    "winner": winner
                }

                if (gameObj.playerA == con) {
                    con.send(JSON.stringify(resOpp))
                    gameObj.playerB.send(JSON.stringify(resYou))
                } else {
                    con.send(JSON.stringify(resOpp))
                    gameObj.playerA.send(JSON.stringify(resYou))
                }


            } else {
                gameStatus.guessesMade++;
                let guess = JSON.parse(JSONguess);
                console.log(guess);
                let result = gameObj.getResult(guess);
                let winner = false;
                if (result[0] == 4) {
                    winner = true;
                    gameStatus.gamesCompleted++;
                }

                var resYou = {
                    "type": "you",
                    "result": result,
                    "winner": winner
                }
                var resOpp = {
                    "type": "opponent",
                    "result": result,
                    "winner": winner
                }



                if (gameObj.playerA == con) {
                    con.send(JSON.stringify(resYou))
                    gameObj.playerB.send(JSON.stringify(resOpp))
                } else {
                    con.send(JSON.stringify(resYou))
                    gameObj.playerA.send(JSON.stringify(resOpp))
                }
            }

        }
    });

});


server.listen(port);

