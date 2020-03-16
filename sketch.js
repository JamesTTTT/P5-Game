function preload(){
 playerSprite = loadImage("Assets/PinkLord2.png");
 groundSprite = loadImage("Assets/Ground.png");
 itemSprite = loadImage("Assets/Crimson.png");
 darkTower= loadImage("Assets/darktower.png")
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
  defaultItem = new Item(gameControls);
  newPlayer = new Player(gameControls);
  towers.push(new Tower(70,70, "topLeft"));
  towers.push(new Tower(650,70,"topRight"));
  towers.push(new Tower(70,650,"bottomLeft"));
  towers.push(new Tower(650,650,"bottomRight"));
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

  //enemy
  fill(22,22,22);
  newEnemy.display();
  newEnemy.move();

  //tower
  fill(255);
  for(let i = 0; i < towers.length; i++) {
    towers[i].display();
  }

  //item
  fill(55);
  stroke(255);
  defaultItem.display();
  defaultItem.pull();

  //Hand
  fill(0);
  newCursor.display();
  newCursor.move();
  }

  //item controll
  function mouseDragged() {
  let d1 = dist(defaultItem.x,defaultItem.y,newCursor.x,newCursor.y);
   if(d1<60){
    defaultItem.interact(); 
   }
    
  }

//variables
let playGame;
let gameControls = [87,83,65,68,69] //wasde

//Sprites
let playerSprite;
let groundSprite;
let itemSprite;
let darkTower;

//Cursor Sprites
let unclickedCursor;
let clickedCursor;




