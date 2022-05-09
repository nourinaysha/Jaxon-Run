

var path,pathImg;
var boy,boyImg;

function preload(){
pathImg= loadImage("path.png");
boyImg= loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(200,295);
  boy.addAnimation("movingBoy",boyImg)
  boy.scale=1;

  invisibleGround1 = createSprite(5,200,10,400);
  invisibleGround1.visible = false;

  
  invisibleGround = createSprite(395,200,10,400);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  boy.x=mouseX
  if(path.y>400){
    path.y = height/2
  }
 
  boy.collide(invisibleGround);  
  boy.collide(invisibleGround1);  

drawSprites()
}
