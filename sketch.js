function preload(){
 playerSprite = loadImage("Assets/PinkLord2.png");
 groundSprite = loadImage("Assets/Ground.png");
 itemSprite = loadImage("Assets/Crimson.png");
 towerSprite1= loadImage("Assets/DarkTower.png")
 towerSprite2= loadImage("Assets/ToxicTower.png")
 towerSprite3= loadImage("Assets/RedTower.png")
 towerSprite4= loadImage("Assets/LightTower.png")
 unclickedCursor = loadImage("Assets/UnclickedCursor.png");
 clickedCursor = loadImage("Assets/ClickedCursor.png");
 screenOverlay = loadImage("Assets/DirtyScreen.png");
}

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  playGame = createButton('Play');
  gameMenu= new menu();
  newCursor = new hand();
  enemies.push(new Enemy(70,70,"topLeft"));
  enemies.push(new Enemy(650,70,"topRight"));
  enemies.push(new Enemy(70,650,"bottomLeft"));
  enemies.push(new Enemy(650,650,"bottomRight"));
  defaultItem = new Item(gameControls);
  newPlayer = new Player(gameControls);
  towers.push(new Tower(70,70,"topLeft"));
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
  if (newPlayer.collision()){
    gameMenu.display();
  }

  //enemy
  fill(22,22,22);
  for(let i= 0; i<enemies.length; i++){ 
  enemies[i].display();
  enemies[i].move();
}

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

  //UI
  image(screenOverlay, 0, 0);
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
let towers = [];
let enemies = [];
let score = 0;
let gameControls = [87,83,65,68,69] //wasde

//Sprites
let groundSprite;
let itemSprite;
let screenOverlay;

//TowerSprites
let towerSprite1;
let towerSprite2;
let towerSprite3;
let towerSprite4;

//Cursor Sprites
let unclickedCursor;
let clickedCursor;




