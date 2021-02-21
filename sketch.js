
var lion,plant;

function setup() {
  createCanvas(800,400);
  lion = createSprite(400, 200, 50, 50);

  plant = createSprite(400,200,30,70)

plant1=createSprite(50,50,30,50)
plant2=createSprite(150,50,30,50)


  ball=createSprite(100,0,10,10)
  box=createSprite(100,400,30,30)

  ball.velocityY= 5
  box.velocityY= - 5
}

function draw() {
  background(0);  

  lion.x = mouseX;
  lion.y = mouseY;
  
  console.log(lion.x)

  

  if( isTouching(lion,plant1)){
    lion.shapeColor = "red";
    plant1.shapeColor = "red";


  }
  else{
    lion.shapeColor = "green";
    plant1.shapeColor = "green";
  }

  bounce(ball,box)
 
  drawSprites();


}








