//to do
// find non copyright sound for beginning of game
//crop images
// Find starting background
// Create image of tutorial
// Game Background Collage
//player moves wasd
// function for spawning the monsters.player1

var tutorial;
var gamestate = 0;
var playerCount;
var tutorial;
var form, game, player;
var backgrd1;
var db;
var player1,player2,player3,player4,player5,player6,player7,player8,player9
var AllPlayers;
var BigCar;

function preload()
{
  backgrd1 = loadImage("house.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  db = firebase.database();
  game = new Game();
  game.readGame();
  game.startGame();
  
}

function draw()
 {
  background(backgrd1);  
  if (tutorial == 0)
  {
    gamestate = 1;
  }
  if (gamestate == 1)
  {
    game.play();
    drawSprites();
  }
  
  
}
  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  
