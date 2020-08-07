
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	var w = width/2;
	var h = height/4+500;

	//Create the Bodies Here.
	  bob1 = new Bob(w-bobDiameter*2,h,bobDiameter);
	  bob2 = new Bob(w-bobDiameter,h,bobDiameter);
	  bob3 = new Bob(w,h,bobDiameter);
	  bob4 = new Bob(w+bobDiameter,h,bobDiameter);
	  bob5 = new Bob(w+bobDiameter*2,h,bobDiameter);

	  roof = new Roof(400,100,700,5);
	  
	  rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	  rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0);
	  rope3 = new Rope(bob3.body,roof.body,0,0);
	  rope4 = new Rope(bob4.body,roof.body,bobDiameter,0);
	  rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  console.log(bob1.body.radius);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:10});
 
	}
	 
}



