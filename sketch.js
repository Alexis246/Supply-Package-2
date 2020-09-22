var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxX,boxY,boxLeft,boxLeftImage,boxBottom,boxBottomImage,boxRight,boxRightImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	boxX = width/2;
	boxY = 650;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.4;

	groundSprite=createSprite(width/2, height-20, width,40);
	groundSprite.shapeColor=color("green");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 250 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	rectMode(CENTER);
	fill("red");

	boxBottom = Bodies.rectangle(boxX,boxY,200,40,{isStatic:true});
	World.add(world, boxBottom);
	boxBottomImage = createSprite(boxBottom.position.x,boxBottom.position.y,200,20);
	boxBottomImage.shapeColor = "red";

	boxLeft = Bodies.rectangle(boxX-100,boxY-40,40,100,{isStatic:true});
	World.add(world,boxLeft);
	boxLeftImage = createSprite(boxLeft.position.x,boxLeft.position.y,20,100);
	boxLeftImage.shapeColor = "red";

	boxRight = Bodies.rectangle(boxX+100,boxY-40,40,100,{isStatic:true});
	World.add(world,boxRight);
	boxRightImage = createSprite(boxRight.position.x,boxRight.position.y,20,100);
	boxRightImage.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  if (keyDown("right")){
	  helicopterSprite.x += 20;
  }
  if (keyDown("left")){
	helicopterSprite.x -= 20;
}
	keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



