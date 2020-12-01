
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState, launched, stop;

let tree, boy;

function preload() {
	tree = loadImage("sprites/tree.png");
	boy = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(450, 690, 900, 20);

	mango1 = new Mango(710, 190, 20);
	mango2 = new Mango(570, 260, 20);
	mango3 = new Mango(800, 330, 20);
	mango4 = new Mango(680, 290, 20);
	mango5 = new Mango(530, 350, 20);
	mango6 = new Mango(600, 180, 20);

	stone = new Stone(100, 570, 20, 20);
	chain = new Chain(stone.body, { x: 100, y: 570 });

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("gray");

	image(tree, 400, 100, 500, 600);
	image(boy, 50, 500, 250, 250);

	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	chain.display();
	stone.display();

	detectCollision(mango1, stone);
	detectCollision(mango2, stone);
	detectCollision(mango3, stone);
	detectCollision(mango4, stone);
	detectCollision(mango5, stone);

	drawSprites();

}



function mouseDragged() {
	gameState = "stop ";
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
	gameState = "launched";
	chain.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		chain.attach(stone.body);
	}
	gameState = "stop";
}




function detectCollision(A, B) {

	mangoP = A.body.position;
	stoneP = B.body.position;

	var distance = dist(stoneP.x, stoneP.y, mangoP.x, mangoP.y)

	if (distance <= A.r + B.r) {

		Body.setStatic(A.body, false);

	}


}