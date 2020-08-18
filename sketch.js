var hero,running2
var awesomes, awesome,ground
var score = 0
var boom;
var ghost,box,ghostI;
var bat,bats,shoot,shoots;
var engine,world;  
var boxGroup;

function preload(){
  awesome = loadImage("Images/city.jpg");
  hero = loadAnimation("Images/Run 2.1.png","Images/Run 2.2.png","Images/Run 2.3.png","Images/Run 2.4.png","Images/Run 2.5.png","Images/Run 2.6.png");
  ghostI = loadImage("Images/enemies.png");
  bat = loadAnimation("Images/bat1.png","Images/bat2.png","Images/bat3.png");
  shoot = loadAnimation("Images/Shoot.png");
 // boom = loadImage("Images/boom!.png");
}

function setup() {
  createCanvas(1200,500);  
 // ghost = createSprite(1200,350,10,10);
 // ghost.addImage(ghostI);
 //  ghost.scale = 0.5


  boxGroup = new Group();
 //boom = createSprite(200,200,20,20);
  bats = createSprite(1150,350,10,10);
  bats.addAnimation("bat",bat);
  bats.velocityX = -10;
  //bats.velocityY = -1;
  //bats.velocityY = 1;
  running2 = createSprite(100,400,10,10);
  running2.addAnimation("running",hero);
  running2.addAnimation("shooting",shoot);
  //running2.scale = 2; 
  ground = createSprite(600,450,1200,10);
  ground.shapeColor = "#1C053B";
}

function spawnBoxes(){ 
  var rand = Math.round(random(125,150));
  if(frameCount%rand===0 )
  {box = createSprite(1100,430,40,40);
  box.shapeColor = "#1C053B";
  box.velocityX = -10}

  //boxGroup.add(box);




}


function draw() {
  background(awesome);

  console.log(running2.y);
  spawnBoxes(); 
 if(keyDown("space")&&running2.y>380){

  running2.velocityY = -13; 
}
running2.velocityY = running2.velocityY + 1;
running2.collide(ground);
//running2.collide(box);

  fill ("red");
  textSize(30);
  text("Score: "+ score,20,30);

  if (mouseIsPressed) {
  if (mouseButton === RIGHT) {
    // shoots = createSprite(100,400,10,10);
    // shoots.addImage(shoot);
     console.log("HI!");
    // shoots.velocityX = 2
    // shoots.depth =running2.depth + 1;
    // shoots.shapeColor = "GREEN";
    console.log(shoots);
    running2.changeAnimation("shooting",shoot); 
  }

}
else{
  running2.changeAnimation("running",hero)
}



  //shooty();

  //boom.display();
  bats.display();
  //ghost.display();
  drawSprites();
}

function shooty(){
  if (mouseButton === "RIGHT"||keyDown("ENTER")) {
    // shoots = createSprite(100,400,10,10);
    // shoots.addImage(shoot);
    // console.log("HI!");
    // shoots.velocityX = 2
    // shoots.depth =running2.depth + 1;
    // shoots.shapeColor = "GREEN";
    // console.log(shoots);
    running2.changeAnimation("shooting",shoot); 
  }
  else{
    running2.changeAnimation("running",hero)
  }

}

