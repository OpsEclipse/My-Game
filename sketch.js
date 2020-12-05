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

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1800,800);

  ground = new Ground(900,790);
  groundS = createSprite(900,790,1800,10);

  bucketL = new Bucket(455,750,10,40);
  bucketR = new Bucket(695,750,10,40);
  bucketB = new Bucket(575,770,250,10);

  bucketLS = createSprite(455,750,10,40);
  bucketRS = createSprite(695,750,10,40);
  bucketBS = createSprite(575,770,250,10);

  cube1 = createSprite(900,-50,50,50);
  cube1.velocityY = 10;
  cube1.shapeColor = "green";

  cube2 = createSprite(300,-250,50,50);
  cube2.velocityY = 10;
  cube2.shapeColor = "yellow";

  cube3 = createSprite(1100,-400,50,50);
  cube3.velocityY = 10;
  cube3.shapeColor = "blue";

  cube4 = createSprite(1400,-650,50,50);
  cube4.velocityY = 10;
  cube4.shapeColor = "pink";



  cubeG = new Group();
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display(); 
  textSize(30);
  text("Score : "+score,1600,100)

  if(gameState === PLAY){

    MoveB();
    cube1.velocityY=10;
    cube2.velocityY=10;
    cube3.velocityY=10;
    cube4.velocityY=10;

    

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
      cube1.y = -50;
      cube2.y = -250;
      cube3.y = -400;
      cube4.y = -650;
      cube1.x = Math.round(random(50,1550));
      cube2.x = Math.round(random(50,1550));
      cube3.x = Math.round(random(50,1550));
      cube4.x = Math.round(random(50,1550));

      gameState = END;
    }

  }else if(gameState === END){
    
    if(keyDown("R")){
      gameState = PLAY;
    }
    textStyle("PermanentMarker");
    textSize(100);
    fill("red");
    text("Game Over",750,200);
    cube1.velocityY = 0;
    cube2.velocityY = 0;
    cube3.velocityY = 0;
    cube4.velocityY = 0;
  }
bucketBS.x = bucketB.x;
bucketLS.x = bucketL.x;
bucketRS.x = bucketR.x;

  drawSprites();
}

function MoveB(){
  if(keyIsDown(RIGHT_ARROW)){
    bucketR.x = bucketR.x+50;
    bucketL.x = bucketL.x+50;
    bucketB.x = bucketB.x+50;
  }
  if(keyIsDown(LEFT_ARROW)){
    bucketR.x = bucketR.x-50;
    bucketL.x = bucketL.x-50;
    bucketB.x = bucketB.x-50;
  }
}

