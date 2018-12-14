var gameStatus = {
    since : Date.now(),     /* since we keep it simple and in-memory, keep track of when this object was created */
    gamesPlayed : 0,   /* number of games initialized */
};

module.exports = gameStatus;