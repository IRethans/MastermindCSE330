var gameStatus = {
    since : Date.now(),     /* since we keep it simple and in-memory, keep track of when this object was created */
    gamesInitialized : 0,   /* number of games initialized */
    gamesCompleted: 0,
    guessesMade: 0
};

module.exports = gameStatus;