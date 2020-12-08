
var wall , thickness;
var bullet, Weight , Speed;


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(200,200,250,100);
  Speed = Math.round(random(55,90));
  Weight = Math.round(random(400,1500));
  bullet.velocityX = Speed;

  wall = createSprite(1500,200,40,300);
  thickness = Math.round(random(22,83));
  wall.width = thickness;
}


function draw() {
  background(0,0,0);  
  

  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;

    var damage = 0.5*Weight*Speed*Speed/(thickness*thickness*thickness);
    
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  }
  
  drawSprites();
}