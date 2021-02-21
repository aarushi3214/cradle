
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var Constraint= Matter.Constraint;
var rope;

function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(200,450,70);
	bobObject2= new Bob(200,500,70);
	bobObject3= new Bob(200,550,70);
	bobObject4= new Bob(200,600,70);
	bobObject5= new Bob(200,650,70);
	roof= new Roof(600,height,1200,20);
	rope= new Rope(bob.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope.display();
}



