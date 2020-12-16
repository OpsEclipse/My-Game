const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,groundS,bucketL,bucketR,bucketB;

var bucketLS,bucketRS,bucketBS;

var coin1,cubeG;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

var score = 0;

var back, coin;
var restart, restartImg;
var bucketImg;
var scoreMp3, overMp3;
var coin1,coin2,coin3,coin4
function preload(){
  back = loadImage("my game back.jpg");
  coin = loadImage("dollar.png");
  restartImg = loadImage("restart.png");
  bucketImg = loadImage("bucket.png")
  overMp3 = loadSound("game-over.mp3");
  scoreMp3 = loadSound("score.mp3");
}
function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(windowWidth, windowHeight);

  ground = new Ground(900,790);
  groundS = createSprite(900,790,1800,10);

  bucketB = new Bucket(575,770,250,10);

  bucketBS = createSprite(575,700,250,10);
  bucketBS.addImage(bucketImg);
  bucketBS.scale = 0.4;

  coin1 = createSprite(900,-50,50,50);
  //coin1.velocityY = 10;
  coin1.addImage(coin);
  coin1.scale = 0.2;

  coin2 = createSprite(300,-250,50,50);
  //coin2.velocityY = 10;
  coin2.addImage(coin)
  coin2.scale = 0.2;

  coin3 = createSprite(1100,-400,50,50);
  //coin3.velocityY = 10;
  coin3.addImage(coin);
  coin3.scale = 0.2;

  coin4 = createSprite(1400,-650,50,50);
  //coin4.velocityY = 10;
  coin4.addImage(coin)
  coin4.scale = 0.2;

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

    coin1.velocityY = 10;
    coin2.velocityY = 10;
    coin3.velocityY = 10;
    coin4.velocityY = 10;

    if(coin1.isTouching(bucketBS)){
      score++;
      coin1.y = -50;
      coin1.x = Math.round(random(50,1550));
      scoreMp3.play();
    }

    else if(coin2.isTouching(bucketBS)){
      score++;
      coin2.y = -50;
      coin2.x = Math.round(random(50,1550));
      scoreMp3.play();
    }
    else if(coin3.isTouching(bucketBS)){
      score++;
      coin3.y = -50;
      coin3.x = Math.round(random(50,1550));
      scoreMp3.play();
    }
    else if(coin4.isTouching(bucketBS)){
      score++;
      coin4.y = -50;
      coin4.x = Math.round(random(50,1550));
      scoreMp3.play();
    }
    if(score%10 ===0){
      coin1.velocityY = coin1.velocityY+2;
      coin2.velocityY = coin2.velocityY+2;
      coin3.velocityY = coin3.velocityY+2;
      coin4.velocityY = coin4.velocityY+2;
    }
    if(coin1.isTouching(groundS)||coin2.isTouching(groundS)||coin3.isTouching(groundS)||coin4.isTouching(groundS)){
      overMp3.play();
      gameState = END;
    }

  }else if(gameState === END){
    textFont("PermanentMarker");
    textSize(100);
    fill("#15f4ee");
    textAlign(CENTER,CENTER);
    text("Game Over",900,250);
    coin1.velocityY = 0;
    coin2.velocityY = 0;
    coin3.velocityY = 0;
    coin4.velocityY = 0;
    if(mousePressedOver(restart)){
     reset();
    }
  }
bucketBS.x = bucketB.x;



  drawSprites();
}

function MoveB(){
  if(touches.length>0 ||keyIsDown(RIGHT_ARROW)){
    bucketB.x = bucketB.x+50;
    touches = []
  }
  if(touches.length>0 ||keyIsDown(LEFT_ARROW)){
    bucketB.x = bucketB.x-50;
    touches = []
  }
}
function reset(){
  coin1.y = -50;
  coin2.y = -250;
  coin3.y = -400;
  coin4.y = -650;

  coin1.x = Math.round(random(50,1550));
  coin2.x = Math.round(random(50,1550));
  coin3.x = Math.round(random(50,1550));
  coin4.x = Math.round(random(50,1550));
  score = 0;
  gameState = PLAY;
}

