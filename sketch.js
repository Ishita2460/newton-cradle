
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ropeObject1,ropeObject2,ropeObject3,ropeObject4,ropeObject5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bobObject1 = new bob(320,400,40);
  bobObject2 = new bob(360,400,40);
	bobObject3 = new bob(400,400,40);
	bobObject4 = new bob(440,400,40);
	bobObject5 = new bob(480,400,40);

	roof = new ground(400,200,400,20);
  
  ropeObject1 = new rope(bobObject1.body,roof.body,-80,0);
  ropeObject2 = new rope(bobObject2.body,roof.body,-40,0);
	ropeObject3 = new rope(bobObject3.body,roof.body,0,0);
	ropeObject4 = new rope(bobObject4.body,roof.body,40,0);
	ropeObject5 = new rope(bobObject5.body,roof.body,80,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  Engine.update(engine);

  bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();

   ropeObject1.display();
   ropeObject2.display();
   ropeObject3.display();
   ropeObject4.display();
   ropeObject5.display();

  roof.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-30 , y:-30});
	  }
	}
