function preload(){
 playerSprite = loadImage("Assets/crime.png");
 groundSprite = loadImage("Assets/Ground.png");
}

let towers = [];

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  newEnemy = new Enemy();
  defaultItem = new Item();
  newPlayer = new Player();
  towers.push(new Tower(50,50, "topLeft"));
}

function draw() {
  //Game Background
  background(20);
  noStroke();
  image(groundSprite,0,0);

  //Player
  fill(255);
  newPlayer.display();
  newPlayer.move();

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

  //Tower
  fill(255);
  for(let i = 0; i < towers.length; i++) {
    towers[i].display();
  }


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

  //Sprites
let playerSprite;
let groundSprite;



