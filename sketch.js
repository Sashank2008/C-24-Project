const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball, ground;
var ball2;
var button2;
var button1;

var rotator1;

var angle = 45;
function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  };

  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(90, 10, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(130, 10, 20, ball_options);
  World.add(world, ball2);

  button1 = createImg("up.png");
  button1.position(30, 30);
  button1.size(50, 50);
  button1.mouseClicked(myforce);

  button2 = createImg("up.png");
  button2.position(290, 30);
  button2.size(50, 50);
  button2.mouseClicked(myforce2);

  rotator1 = Bodies.rectangle(180, 250, 10, 100, ground_options);
}

function draw() {
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  Matter.Body.rotate(rotator1, angle);
  ellipse(ball.position.x, ball.position.y, 20);
  push();
  fill(255, 204, 0);
  ellipse(ball2.position.x, ball2.position.y, 20);
  pop();
  rect(ground.position.x, ground.position.y, 500, 20);
  push();
  fill("cyan");
  rectMode(CENTER);
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle);
  rect(0, 0, 10, 100);
  angle += 0.4;
  pop();
  console.log(ground.position.y);
}

function myforce() {
  // Matter.applyForce(body, position, force)
  Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
function myforce2() {
  // Matter.applyForce(body, position, force)
  Body.applyForce(ball2, { x: 0, y: 0 }, { x: -0.05, y: 0 });
}
