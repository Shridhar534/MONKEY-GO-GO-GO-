var PLAY;
var END;
var gamestate;
var ground;
 

var monkey , monkeyrunning
var banana ,bananaimage, obstacle, obstacleimage
var foodgroup, obstaclegroup
var score

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)

  ground = createSprite(300,390,600,10) 
  ground.shapeColor="green";
  
  monkey=createSprite(80,315,30,30);
  monkey.addAnimation("moving",monkeyrunning);
  monkey.scale=0.1 
  
}
  
  
function draw() {
 background("lightblue"); 
var survivalTime;
  stroke ("white");
  textSize (20);
  fill("white")
  text ("score : "+score, 400,50);
  
  stroke ("white");
  textSize (20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time : "+ survivalTime,150,50); 
  //console.log(survivalTime)
  
    
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      }
     
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  if(gamestate === PLAY){

    //  ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
        
     monkey.collide(ground);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    // monkey.collide(ground);    
  
     //if (banana.isTouching(monkey)){
     // banana.visible=false;}
    
    
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
       
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    //spawn the bananas
    spawnbanana();
  
    //spawn obstacles on the ground
    spawnstone();
    
   // monkey.collide(ground);
          
  
  
  
 
  
  monkey.collide(ground);
  createEdgeSprites();
  drawSprites();
}
}
  

function spawnstone(){
 
 if (frameCount % 128 === 0){
   var obstacle = createSprite(395,350,20,30);
   obstacle.addImage(obstacleimage)
   obstacle.scale=0.2;
   obstacle.velocityX=-3;
   
 }

}
  
function spawnbanana (){
  
  if (frameCount % 195 === 0){
    var banana = createSprite(400,170,10,10);
    banana.addImage(bananaimage)
    banana.scale=0.1;
    banana.velocityX=-3;
     
   
  }
  
}
