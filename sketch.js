var PLAY;
var END;
var gameState = PLAY;

var monkey , monkey_running

var banana ,bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var score;

var ground;

var restart;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
  createCanvas(550,400);
  
  var survivaltime = 0;
  

   monkey = createSprite(100,320,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
    monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
    monkey.debug = false;
  
  ground = createSprite(300,348,1100,10);
  ground.velocityX = -5;
  ground.shapeColor = "green";
  
 
   
  

    

  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}


function draw() {
  background("white");
  ///console.log(ground.x);
      monkey.collide(ground);

  if(gameState === PLAY){
  if(ground.x < 0){
    ground.x = ground.width/2

  }
     if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  
if(keyDown("space") && monkey.y >= 312.3){
     monkey.velocityY = -12;
   }
  
  monkey.velocityY = monkey.velocityY + 0.4;
  
  ground.velocityX = -(4 + 3* score/5);
    
  if(obstacleGroup.isTouching(monkey)){
   ground.velocityX = 0;
      monkey.velocityY  = 0;
    
 

    
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    monkey.depth = banana.depth+1;
    obstacle.setlifetimeEach = (-1);
    FoodGroup.setLifetimeEach(-1);
    survivalTime = 0;
      
    
    
   text("RESTART",240,145);
    
    gameState = END;
     
    
    text("GAME OVER",220,120);
  }
      

  
  spawnObstacles();
  spawnFood();
  
  drawSprites();
  stroke("red");
  textSize(20);
  fill("red");
  text("Score: "+ score, 300,50);
    
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100,50);
    

    }  
    
 if (gameState === END){
     

    
      
  }
    
  }
  

    
  
  
 
  
 


  function spawnObstacles(){
    if(frameCount % 300 === 0){
      obstacle = createSprite(700,320,10,10);
      obstacle.velocityX = -(7 + score/2);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.15;
      
      
      obstacleGroup.add(obstacle);

    }
    
  }
 
  function spawnFood(){
    if(frameCount % 80 === 0){
      banana = createSprite(650,200,40,10);
      banana.velocityX = -6;
      banana.y = random(120,200);
      banana.addImage(bananaImage);
      banana.scale = 0.06;
      
      FoodGroup.add(banana);
    }
  }
 function reset(){
   gameState = PLAY;
   restart.visible = false;
   obstacleGroup.destroyEach();
   FoodGroup.destroyEach();
   score =0;
   survivalTime = 0;

   
 }









  