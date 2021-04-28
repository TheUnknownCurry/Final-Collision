var movingbox,fixedbox
function setup() {
  createCanvas(1200,800);
  fixedbox = createSprite(600, 400, 50, 80);
  fixedbox.shapeColor = "lightblue"
  movingbox = createSprite(400, 200, 80, 30);
  movingbox.shapeColor = "red"
  box1 = createSprite(100,100,50,50)
  box1.shapeColor = "yellow"
  box2 = createSprite(200,100,50,50)
  box2.shapeColor = "yellow"
  box3 = createSprite(300,100,50,50)
  box3.shapeColor = "yellow"
  box4 = createSprite(400,100,50,50)
  box4.shapeColor = "yellow"
}

function draw() {
  background(255,255,255);
  movingbox.x = mouseX
  movingbox.y = mouseY
  
    if(isTouching(movingbox,box4)){

  movingbox.shapeColor = "purple"
  box4.shapeColor = "pink"
}
else{
  movingbox.shapeColor = "red"
  box4.shapeColor = "yellow" 
}
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.width/2 + object1.width/2 &&
    object2.y - object1.y < object1.width/2 + object2.width/2){
   return true;
  }
  else{
   return false;
  }
    
}