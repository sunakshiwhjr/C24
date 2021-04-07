//NameSpace
//Engine is used to create the Physics Engine
const Engine = Matter.Engine;
//World is used to create the physical World and add bodies to it
const World = Matter.World;
//Bodies is used to create the physical bodies which inhibits in the world
const Bodies = Matter.Bodies;

//create your own engine, world and bodies using the physics engine
var myEngine, myWorld;

var ground1;
var box1, box2, box3, box4, box5;
var pig1;
var log1, log2, log3;
var bird1;

function setup() {
  createCanvas(1200,400);
  //create our own engine
  myEngine = Engine.create();
  //myWorld is myEngine's world 
  //create the world of the our own engine
  myWorld = myEngine.world;
  //create new ground object out of the Ground Class 
   ground1 = new Ground(600, height, 1200, 20);

  //create new Box object out of Box Class
    box1 = new Box(700, 320, 70, 70);  
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(810, 160, 70, 70);

  //create the pig
   pig1 = new Pig(810, 350);
   pig2 = new Pig(810, 220);

   //create Bird
   bird1 = new Bird(100, 100, 60,60);

  //create log
  log1 =  new Log(810, 260, 300, PI/2);
  log2 = new Log(810, 180, 300, PI/2);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);
    
  console.log(log1)
   }

function draw() {
  background("Black"); 


  textSize(20);
  text(mouseX + ", " + mouseY, mouseX, mouseY);
  Engine.update(myEngine); 
 //when ground is created and displayed before the boxes then the color given to ground also applies to the boxes.
 //Solution : Add push and pop
 //Solution:  Add ground.display() after the box1.display() and box2.display()
 ground1.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

 pig1.display();
 pig2.display();

 bird1.display();

 log1.display();
 log2.display();
 log3.display();
 log4.display();
 //console.log(box2.body.angle)


    
  drawSprites();
}