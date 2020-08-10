var player;
var canvas;
var plimg;
var distance;
var score;
var gameState;
var bunk1,bunk2,bunk3,bunk4;
var bnk1,bnk2,bnk3,bnk4;
var airp;
var bulletsGroup;
var bullets;
var misImg;

function preload(){
  plaimg = loadImage("img.png");

  bnk1 = loadImage("bunker-md.png");
  bnk2 = loadImage("bunker.jpg");
  bnk3 = loadImage("bunker.jpg");
  bnk4 = loadImage("bunker.jpg");

  misImg = loadImage("missile.png")
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);

  airp = createSprite(displayWidth-500,displayHeight/1.2,1500,5)

  player = createSprite(displayWidth/1.1,displayHeight/1.34,25,25);
  player.addImage("player",plaimg);
  player.scale = 0.5;

  distance = 0;
  score = 0;
  gameState = 0;

  bunk1 = createSprite(displayWidth/10-2300,displayWidth/2);
  bunk1.addImage("bunk1",bnk1);
  
  bunk2 = createSprite(displayWidth/10-3300,displayWidth/2);
  bunk2.addImage("bunk2",bnk1);

  bunk3 = createSprite(displayWidth/10-4300,displayWidth/2);
  bunk3.addImage("bunk3",bnk1);

  bunk4 = createSprite(displayWidth/10-5300,displayWidth/2);
  bunk4.addImage("bunk4",bnk1);

  bulletsGroup = createGroup();
}

function draw() {
  background("blue");  

  textSize(22);
  fill(255);
  text("Your Score:" +score,player.x-300  ,displayHeight/10);

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
    distance = distance+1;
    score = score+1;
  }

  if(player.x < 1340){
    if(keyDown(UP_ARROW)){
      player.y = player.y-5;
    }
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5;
  }

  if(bulletsGroup.isTouching(bunk1)){
    bulletsGroup.destroyEach();
    bunk1.destroy();
    score = score+100;
  }

  if(bulletsGroup.isTouching(bunk2)){
    bulletsGroup.destroyEach();
    bunk2.destroy();
    score = score+100;
  }

  if(bulletsGroup.isTouching(bunk3)){
    bulletsGroup.destroyEach();
    bunk3.destroy();
    score = score+100;
  }

  if(bulletsGroup.isTouching(bunk4)){
    bulletsGroup.destroyEach();
    bunk4.destroy();
    score = score+100;
  }

  console.log(player.x);

  camera.x = player.x;

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    bullets = new Missile();
    console.log("hello");
  }
}