
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,dustbin,paper;
	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bin1 = new d(580,670,10,90)
  bin2 = new d(650,670,130,10)
  bin3 = new d(720,650,10,90)
  paper = new p(100,670)
	ground = new Ground(400,680,800,20)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:125});
  }
}



