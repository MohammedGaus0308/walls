var bullet,wall,thickness
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=ramdom(223,321);
  weight=ramdom(30,52)
  bullet=createSprite(50,200,20,50)
  bullet.shapeColor
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor(80,80,80)
}
thickness=random(23,83)
function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
  if(damage>50){
    bullet.shapeColor("red");
  }
  if(damage<40){
    bullet.shapeColor("green")
  }
  drawSprites();
}
