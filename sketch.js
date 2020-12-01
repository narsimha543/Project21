var wall, thinkness 
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  thinkness = random(22,83);
  weight = random(30,52);
  car =  createSprite(50,200,50,50);
  car.velocityX = speed
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

if (wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/2500
  if(deformtion>100)
  {
    car.shapeColor = color(255,0,0);
  }
  if(deformation<100 && deformation>100)
  {
    car.shapeColor = color(230,230,0);
  } 
  if(deformation<100)
  {
    car.shapeColor = (0,255,0)
  }

}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallleftEdge = lwall.x;
if(bulletRightEdge>=wallleftEdge)
{
  return true
}
return false;
}






