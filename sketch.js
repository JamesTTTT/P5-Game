function preload(){
 playerSprite = loadImage("Assets/PinkLord2.png");
 groundSprite = loadImage("Assets/Ground.png");
 itemSprite = loadImage("Assets/Crimson.png");
 unclickedCursor = loadImage("Assets/UnclickedCursor.png");
 clickedCursor = loadImage("Assets/ClickedCursor.png");
}

let towers = [];

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  playGame = createButton('Play');
  gameMenu= new menu();
  newCursor = new hand();
  newEnemy = new Enemy();
  defaultItem = new Item();
  newPlayer = new Player();
  towers.push(new Tower(50,50, "topLeft"));
  towers.push(new Tower(670,50,"topRight"));
  towers.push(new Tower(50,670,"bottomLeft"));
  towers.push(new Tower(670,670,"bottomRight"));
  gameMenu.display();
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

  //Tower
  fill(255);
  for(let i = 0; i < towers.length; i++) {
    towers[i].display();
  }
  //menu

  //Hand
  fill(0);
  newCursor.display();
  newCursor.move();
  }

  //play button
  function mousePressed(playGame){
    gameMenu.play();
  }

  //item controll
  function mouseDragged() {
  let d = dist(defaultItem.x,defaultItem.y,newCursor.x,newCursor.y);
   if(d<19){
    defaultItem.interact(); 
   } else {
   defaultItem.idle();
   }
    
  }

//variables
let playGame;

//Sprites
let playerSprite;
let groundSprite;
let itemSprite;

//Cursor Sprites
let unclickedCursor;
let clickedCursor;




