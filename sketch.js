
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,ground1,chain1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(295,180,130,20);
	
	bobObject1 = new bob(249,380,20,20);
	bobObject2 = new bob(271,380,20,20);
	bobObject3 = new bob(293,380,20,20);
    bobObject4 = new bob(315,380,20,20);
	bobObject5 = new bob(337,380,20,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gold");
  
  ground1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



