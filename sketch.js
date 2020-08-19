
var engine, world;
var platform1, platform2;
var bird, slingShot;
//var Matter, Engine, World;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    bird = loadImage("Images/pentagon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(680, 300, 300, 10);
    platform2 = new Ground(1000, 240, 300, 10);

    box1 = new Box(700,295,100,100);
    box2 = new Box(1020,235,100,100);
    

//    box3 = new Box(700,240,200,200);
 //   box4 = new Box(920,240,200,200);
    

  //  box5 = new Box(810,160,70,70);

    bird = new Pentagon(200,50,45,45);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
   // box3.display();
   // box4.display();
    
    //box5.display();
    //log4.display();
    
    bird.display();
    platform1.display();
    platform2.display();
 
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}