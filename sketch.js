const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var bgImage,background;
var charac1,charac1Img,SnowMan,SnowManImg
var Snowparticle = [ ]



function preload () {
  bgImage = loadImage("snow2.jpg");
  charac1Img = loadImage("Charac-1.png")
  SnowManImg = loadImage("Snowman-charac-2.png")
 }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  charac1=createSprite(540,310,20,20)
  SnowMan=createSprite(260,300,20,20)
  charac1.addImage(charac1Img)
  SnowMan.addImage(SnowManImg)
  charac1.scale=0.4;
  SnowMan.scale=0.4;
}


function draw() {
  background(bgImage);  
  Engine.update(engine)
  if(frameCount%20===0){
     Snowparticle.push(new Snow(random(100, 700), -50,10));
     } 
     for (var j = 0; j < Snowparticle.length; j++)
      { Snowparticle[j].display(); }

    if (keyDown==="RIGHT_ARROW"){
      charac1Img.x = charac1Img.x+10;
    }
    if (keyDown=="W"){
      SnowMan.x = SnowMan.x+10;
    }
  drawSprites();
}