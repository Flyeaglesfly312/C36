var database;

var gameState = 0;
var playerCount = 0;

//game objects
var form,player,gameState;

function setup(){
    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){



}