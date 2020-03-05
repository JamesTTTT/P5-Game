function preload(){
  playerSprite = loadImage("Assets/crime.png");
}

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  newEnemy = new enemy();
  defaultItem = new item();
}

function draw() {
  background(20);
  noStroke();

  //Player
  fill(255);
  player.display();
  player.move();

  //item
  fill(55);
  stroke(255);
  defaultItem.display();

  //enemy
  fill(22,22,22);
  newEnemy.display();
  newEnemy.move();

 
  //Hand
  fill(0);
  hand.display();
  hand.move(); 

  }

  //item controll
  function mouseDragged() {
  let d = dist(defaultItem.x,defaultItem.y,hand.x,hand.y);
   if(d<19){
    defaultItem.interact(); 
   } else {
    defaultItem.idle();
   }
    
  }





