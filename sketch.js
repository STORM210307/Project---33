const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;
var snow = [];


function preload() {

  bg = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

}  
    
function draw() {
  background(bg); 

  Engine.update(engine); 

  if(frameCount%80===0) {
    snow.push(new Snow(random(width/2-40, width/2+40), 40, 40))
  
  }

  for(var p = 0; p < snow.length; p++) {
    snow[p].display();

  }

  drawSprites();
}       