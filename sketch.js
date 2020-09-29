var trex,trex_collided,trex_running;
var ground,invisible_ground,ground_image;

function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided=loadImage("trex_collided.png");
  ground_image=loadImage("ground2.png");
  
}

function setup() {
  createCanvas(400, 400);
  trex=createSprite(50,380,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  
  ground=createSprite(200,390,400,10);
  ground.addImage("ground",ground_image);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
  invisible_ground=createSprite(200,390,400,10);
  invisible_ground.visible=false;
  
  
}

function draw() {
  background(220);
  
  trex.collide(invisible_ground);
  
  
  if(keyDown("space")&&trex.y>=347){
  trex.velocityY=-8;
   }
  
  trex.velocityY=trex.velocityY+0.8;
  
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  
  drawSprites();
  
}