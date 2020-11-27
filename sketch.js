const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,bucketL,bucketR,bucketB;

var cube,test;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1800,800);

  ground = new Ground(900,790);

  bucketL = new Bucket(455,750,10,40);
  bucketR = new Bucket(695,750,10,40);
  bucketB = new Bucket(575,770,250,10);

  cube = new Cube(200,300);

  test = createSprite(200,600,20,60);

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display(); 

  bucketL.display();
  bucketR.display();
  bucketB.display();

  cube.display();
  
  //console.log(bucketB.x);

  MoveB();

  drawSprites();
}

function MoveB(){
  if(keyIsDown(RIGHT_ARROW)){
    test.x = test.x+5;
    bucketR.x = bucketR.x+50;
    bucketL.x = bucketL.x+50;
    bucketB.x = bucketB.x+50;
  }
}