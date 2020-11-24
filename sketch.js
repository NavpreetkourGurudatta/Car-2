var Bullet,speed,weight
var Wall,thickness




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  thickness = random(23,88);
  Wall = createSprite(1200,200,thickness,height/2)
  Wall.shapeColor = color(80,80,80);
  speed = random(233,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
if(hasCollided(Bullet,Wall)){
  Bullet.velocityX = 0;
  var Damage = 0.5 * speed * speed * speed /(thickness*thickness*thickness)

}
if(Damage < 10){
  Wall.shapeColor = color(255,0,0)
}
if(Damage > 10){
  Wall.shapeColor = color(0,255,0)
}
}
function hasCollided (lBullet,lWall){
  BulletRightEdge = lBullet.x +lBullet.width;
  WallLeftEdge =lWall.x
  if(Bullet>=WallLeftEdge){
    return true
}
return false;

}