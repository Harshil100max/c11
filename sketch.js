
function preload(){
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
    
}

function setup(){
  createCanvas(400,400);
  if(path.y > 400){ 
    path.y=height/2;
  } 

}

function draw() {


  
}
