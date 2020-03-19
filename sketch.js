function preload(){
 playerSprite = loadImage("Assets/PinkLord2.png");
 playerSprite2 = loadImage("Assets/PinkLord.png");
 groundSprite = loadImage("Assets/Ground.png");
 itemSprite = loadImage("Assets/Crimson.png");
 towerSprite1= loadImage("Assets/DarkTower.png")
 towerSprite2= loadImage("Assets/ToxicTower.png")
 towerSprite3= loadImage("Assets/RedTower.png")
 towerSprite4= loadImage("Assets/LightTower.png")
 unclickedCursor = loadImage("Assets/UnclickedCursor.png");
 clickedCursor = loadImage("Assets/ClickedCursor.png");
 screenOverlay = loadImage("Assets/DirtyScreen.png");
 clickSound = loadSound("Assets/SFX/klick.wav");
 deathSound = loadSound("Assets/SFX/deathsound.mp3");
 backgroundMusic = loadSound("Assets/SFX/gamemusic.mp3");
}

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  playGame = createButton('Play');
  gameMenu = new menu();
  newCursor = new hand();
  newPlayer = new Player(gameControls);
  defaultItem = new Item(gameControls);
  towers.push(new Tower(70,70,"topLeft"));
  towers.push(new Tower(650,70,"topRight"));
  towers.push(new Tower(70,650,"bottomLeft"));
  towers.push(new Tower(650,650,"bottomRight"));
  gameMenu.display();
  setInterval(enemySpawn,4000);
}

function draw() {
  //Game Background
  background(20);
  noStroke();
  image(groundSprite,0,0);
  
  //Player
  newPlayer.display();
  newPlayer.move();
  if (newPlayer.hitBox()){
    gameMenu.display();
  }

  //enemy
  for(let i= 0; i<enemies.length; i++){ 
  enemies[i].display();
  enemies[i].move();
}
  
  //tower
  for(let i = 0; i < towers.length; i++) {
    towers[i].display();
  }

  //item
  defaultItem.display();
  defaultItem.hitBox();

  //Hand
  newCursor.display();
  newCursor.move();

  //Game UI
  gameMenu.ui();



  //Abilities

  //Force Pull abilty by pressing "E"
  if(level>=2){
    defaultItem.pull();
  }

  //Shrink ability by pressing "Shift"
  if(level>=4){
    newPlayer.shrink();
  }

  //Sprint ability by pressing "Shift"
  if(level>=5){
    newPlayer.sprint();
  }
}
//Draw Ends Here


//item controll
  function mouseDragged() {
  let d1 = dist(defaultItem.x,defaultItem.y,newCursor.x,newCursor.y);
   if(d1<60){
    defaultItem.interact(); 
   }
    
  }


//click sound
  function mousePressed() {
    clickSound.play();
  }

  function enemySpawn(){
    enemies.push(new Enemy(20,20,"topLeft"));
    /*enemies.push(new Enemy(650,70,"topRight"));
    enemies.push(new Enemy(70,650,"bottomLeft"));
    enemies.push(new Enemy(650,650,"bottomRight"));*/
    score += 1;
  }
  

//variables
let playGame;
let towers = [];
let enemies = [];
let nextLvl = 20;
let score = 0;
let level = 1;
let timer = 0;
let gameControls = [87,83,65,68,69,16] //w,a,s,d,e,"shift"

//Sprites
let groundSprite;
let playerSprite;
let playerSprite2;
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

//Sounds
let clickSound;
let deathSound;
let backgroundMusic;




