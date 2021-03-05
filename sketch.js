
var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  thickness= random(22,83);
  bullet = createSprite(50,200,50,5);
  wall = createSprite(1500,200,thickness,height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255)
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.width + wall.width)/2) {
    bullet.velocityX = 0;
    var deform = (0.5*weight*speed*speed)/22500

    if(deform < 100){
      wall.shapeColor= color(0,255,0);
    }

    if(deform < 180 && deform > 100 ){
      wall.shapeColor = color(230,230,0);
    }
     
    
    if(deform > 180 ){
      wall.shapeColor = color(250,0,0);
    }

    if(deform < 10 ){
      wall.shapeColor = color("green");
    }
  } 
  drawSprites();
}