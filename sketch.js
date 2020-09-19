var backgr,backgroundImage;
var monkey,monkey_running;
var ground,groundImage;

var foodgroup,bananaImage;
var obstaclegroup,obstacleImage;

var gameOver;
var score=0;

function preload(){
  backImage= loadImage("jungle.jpg");
  monkey_running=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup(){
  createCanvas(800,400);
  backgr=createSprite(0,0,800,400);
}

function draw(){
 background(255); 
  drawSprites();
}