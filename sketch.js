const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,groundS,bucketL,bucketR,bucketB;

var bucketLS,bucketRS,bucketBS;

var cube1,cubeG;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

var score = 0;

var back, coin;
var restart, restartImg;
var bucketImg;
function preload(){
  back = loadImage("my game back.jpg");
  coin = loadImage("dollar.png");
  restartImg = loadImage("restart.png");
  bucketImg = loadImage("bucket.png")
}
function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1800,800);

  ground = new Ground(900,790);
  groundS = createSprite(900,790,1800,10);

  bucketB = new Bucket(575,770,250,10);

  bucketBS = createSprite(575,700,250,10);
  bucketBS.addImage(bucketImg);
  bucketBS.scale = 0.4;

  cube1 = createSprite(900,-50,50,50);
  cube1.velocityY = 10;
  cube1.addImage(coin);
  cube1.scale = 0.2;

  cube2 = createSprite(300,-250,50,50);
  cube2.velocityY = 10;
  cube2.addImage(coin)
  cube2.scale = 0.2;

  cube3 = createSprite(1100,-400,50,50);
  cube3.velocityY = 10;
  cube3.addImage(coin);
  cube3.scale = 0.2;

  cube4 = createSprite(1400,-650,50,50);
  cube4.velocityY = 10;
  cube4.addImage(coin)
  cube4.scale = 0.2;

restart = createSprite(50,50,50,50);
restart.addImage(restartImg);
restart.scale = 0.15;

  groundS.visible = false;
  
}

function draw() {
  background(back);
  Engine.update(engine);
  //ground.display(); 
  textSize(45);
  fill("#15f4ee");
  text("Score : "+score,1500,100)

  if(gameState === PLAY){

    MoveB();

    cube1.velocityY = 10;
    cube2.velocityY = 10;
    cube3.velocityY = 10;
    cube4.velocityY = 10;

    if(cube1.isTouching(bucketBS)){
      score++;
      cube1.y = -50;
      cube1.x = Math.round(random(50,1550));
    }

    else if(cube2.isTouching(bucketBS)){
      score++;
      cube2.y = -50;
      cube2.x = Math.round(random(50,1550));
    }
    else if(cube3.isTouching(bucketBS)){
      score++;
      cube3.y = -50;
      cube3.x = Math.round(random(50,1550));
    }
    else if(cube4.isTouching(bucketBS)){
      score++;
      cube4.y = -50;
      cube4.x = Math.round(random(50,1550));
    }
    else if(cube1.isTouching(groundS)||cube2.isTouching(groundS)||cube3.isTouching(groundS)||cube4.isTouching(groundS)){
      gameState = END;
    }

  }else if(gameState === END){
    textFont("PermanentMarker");
    textSize(100);
    fill("#15f4ee");
    textAlign(CENTER,CENTER);
    text("Game Over",900,250);
    cube1.velocityY = 0;
    cube2.velocityY = 0;
    cube3.velocityY = 0;
    cube4.velocityY = 0;
    if(mousePressedOver(restart)){
     reset();
    }
  }
bucketBS.x = bucketB.x;


  drawSprites();
}

function MoveB(){
  if(keyIsDown(RIGHT_ARROW)){
    bucketB.x = bucketB.x+50;
  }
  if(keyIsDown(LEFT_ARROW)){
    bucketB.x = bucketB.x-50;
  }
}
function reset(){
  cube1.y = -50;
  cube2.y = -250;
  cube3.y = -400;
  cube4.y = -650;

  cube1.x = Math.round(random(50,1550));
  cube2.x = Math.round(random(50,1550));
  cube3.x = Math.round(random(50,1550));
  cube4.x = Math.round(random(50,1550));
  score = 0;
  gameState = PLAY;
}

