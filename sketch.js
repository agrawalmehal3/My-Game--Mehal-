const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter. World;

var engine 
var world 
var hoopside1, hoopside2, hoopside3;
var hoopimage;

function preload(){
  hoopimage=loadImage("images/ball.jpeg");
}


function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  hoopside1= new Hoopwall(100, 30, 10, 120);
  hoopside2= new Hoopwall(160, 85, 120, 10);
  hoopside3= new Hoopwall(220, 30,10, 120);
}

function draw() {
  background(0);
  Engine.update(engine);
  image(hoopimage, 160, 40, 60, 60);
  hoopside1.display();
  hoopside2.display();
  hoopside3.display();  
}