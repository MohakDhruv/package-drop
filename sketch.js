const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var plane;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
    ball_options  ={
        restitution: 1
    }
         ball = Bodies.circle(200,200,11,ball_options);
    World.add(world,ball);
    console.log(ground);

     plane = Bodies.rectangle(160,180,110,22);
     
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,11,11);
    rect(plane.position.x,plane.position.y,50,11 );
    plane.position.x = plane.position.x + 11

}