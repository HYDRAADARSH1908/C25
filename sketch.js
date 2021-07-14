
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

object1=Bodies.rectangle(100,100,50,50)
World.add(world,object1)
object2=Bodies.rectangle(300,100,50,50)
World.add(world,object2)
object3=Bodies.circle(500,100,50,{isStatic:true})
World.add(world,object3)
object4=Bodies.circle(700,100,50,{isStatic:true})
World.add(world,object4)
}
function draw()
{
  background(0);
  rectMode(CENTER);
    rect(object1.position.x ,object1.position.y,50,50);
    rect(object2.position.x,object2.position.y,50,50);
    circle(object3.position.x,object3.position.y,50,50);
    circle(object4.position.x,object4.position.y,50,50);
}
