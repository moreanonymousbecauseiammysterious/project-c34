// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

var basketball;
var basketballImg;
var basketBallCourt;
var basketBallCourtImg;
var jacob;
var jacobImg;
var barrier, barrier1, barrier2, barrier3, barrier4;
var robot;
var robotImg;


function preload(){
  basketBallCourtImg = loadImage("BasketBallCourt.jpg");
  basketballImg = loadImage("basketball.png");
  jacobImg = loadImage("Jacob.png");
  robotImg = loadImage("robot.png");
}

function setup() {
  createCanvas(800,400);
  // engine = Engine.create();
  // world = engine.world;

  jacob = createSprite(200,200);
  jacob.addImage(jacobImg);
  jacob.scale = 0.07;

  basketball = createSprite(400,200);
  basketball.addImage(basketballImg);
  basketball.scale = 0.1;
  basketball.debug = false;
  basketball.setCollider("rectangle", 40,40);

  robot = createSprite(600,200);
  robot.addImage(robotImg);
  robot.scale = 0.17;

  barrier = createSprite(400,200,5,400); // the middle one
  barrier.visible = false;
  barrier1 = createSprite(400,0,800,10); // the top one
  barrier1.visible = false;
  barrier2 = createSprite(400,400,800,10); // the bottom one
  barrier2.visible = false;
  barrier3 = createSprite(0,200,10,400); // the left one
  barrier3.visible = false;
  barrier4 = createSprite(800,200,10,400); // the right one
  barrier4.visible = false;
}


function draw() {
  background(basketBallCourtImg);
  // Engine.update(engine);

  jacob.velocityY = 0;
  jacob.velocityX = 0;

  robot.y = basketball.y;
  robot.x = robot.position.x;

  if(keyDown(UP_ARROW)){
    jacob.velocityY = -8;
  }
  if(keyDown(DOWN_ARROW)){
    jacob.velocityY = 8;
  }
  if(keyDown(RIGHT_ARROW)){
    jacob.velocityX = 8;
  }
  if(keyDown(LEFT_ARROW)){
    jacob.velocityX = -8;
  }

  jacob.collide(barrier);
  jacob.collide(barrier1);
  jacob.collide(barrier2);
  jacob.collide(barrier3);
  jacob.collide(barrier4);
  jacob.collide(basketball);

  robot.collide(barrier);
  robot.collide(barrier1);
  robot.collide(barrier2);
  robot.collide(barrier3);
  robot.collide(barrier4);
  robot.bounceOff(basketball);

  basketball.collide(barrier1);
  basketball.collide(barrier2);



  if(jacob.collide(basketball)){
    basketball.velocityX = 10;
    basketball.velocityY = 10;
  }
  if(robot.collide(basketball)){
    basketball.velocityX = -10;
    basketball.velocityY = -10;
  }

  drawSprites();
}