var ship ,ship_moving;
var sea,background_sea;
function preload(){
    sea=loadImage("sea.png");
    ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  ship=createSprite(70,200,20,50);
  ship.scale=0.20;
  ship.addAnimation("moving",ship_moving);

  sea.velocityX=0.5;
}

function draw() {
  background(sea);

  if (sea.x<0){
    sea.x=sea.width/2;
  }
  drawSprites();
}