function preload(){
  //Game Sprites
 playerSprite = loadImage("Assets/Sprites/PinkLord2.png");
 playerSprite2 = loadImage("Assets/Sprites/PinkLord.png");
 groundSprite = loadImage("Assets/Sprites/Ground.png");
 itemSprite = loadImage("Assets/Sprites/Crimson.png");

 enemySprite1 = loadImage("Assets/Sprites/enemy/DeathBall.png");
 enemySprite2 = loadImage("Assets/Sprites/enemy/FamineBall.png");
 enemySprite3 = loadImage("Assets/Sprites/enemy/PestilenceBall.png");
 enemySprite4 = loadImage("Assets/Sprites/enemy/WarBall.png");

 towerSprite1= loadImage("Assets/Sprites/DeathTower.png");
 towerSprite2= loadImage("Assets/Sprites/FamineTower.png");
 towerSprite3= loadImage("Assets/Sprites/PestilenceTower.png");
 towerSprite4= loadImage("Assets/Sprites/WarTower.png");

 //UI
 unclickedCursor = loadImage("Assets/Sprites/UnclickedCursor.png");
 clickedCursor = loadImage("Assets/Sprites/ClickedCursor.png");
 screenOverlay = loadImage("Assets/Sprites/DirtyScreen.png");

 //Ability sprites
 pullSprite = loadImage("Assets/Sprites/ability/pull.png");
 sprintSprite = loadImage("Assets/Sprites/ability/sprint.png");
 shrinkSprite = loadImage("Assets/Sprites/ability/shrink.png");

 //Sounds
 clickSound = loadSound("Assets/SFX/klick.wav");
 deathSound = loadSound("Assets/SFX/deathbe.mp3");
 backgroundMusic = loadSound("Assets/SFX/gamemusic.mp3");
 levelUp = loadSound("Assets/SFX/levelup.wav");
}

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  playGame = createButton('Play');
  gameMenu = new menu();
  newCursor = new hand();
  newDrop = new drop();
  newPlayer = new Player(gameControls);
  defaultItem = new Item(gameControls);
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

  //drops
  newDrop.display();

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
  if(level>=3){
    defaultItem.pull();
    defaultItem.pullDisplay();
  }

  //Shrink ability by pressing "Shift"
  if(level>=5){
    newPlayer.shrink();
    newPlayer.shrinkDisplay();
  }

  //Sprint ability by pressing "Shift"
  if(level>=6){
    newPlayer.sprint();
    newPlayer.sprintDisplay();
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

  //Enemy Spawning
  let enemyMultiplier = 1;
  let spawnInterval = 4000;
  setInterval(enemySpawn,spawnInterval*enemyMultiplier);
  function enemySpawn(){
    let spawner = int(random(4));
    switch(spawner){
      case 0:
        enemies.push(new Enemy(20,20,"topLeft"));
        break;
      case 1:
        enemies.push(new Enemy(700,30,"topRight"));
        break;
      case 2:
        enemies.push(new Enemy(20,700,"bottomLeft"));
        break;
      case 3:
        enemies.push(new Enemy(700,700,"bottomRight"));
        break;
    }
    score += 1;
    if(enemyMultiplier>0.4){
      enemyMultiplier -= 0.05;
    }
  }


//variables
let playGame;
let towers = [];
let enemies = [];
let bullets = [];
let nextLvl = 20;
let score = 0;
let level = 1;
let timer = 0;
let gameControls = [87,83,65,68,69,16,32] //w,a,s,d,e,"shift","space"

//Sprites
let groundSprite;
let playerSprite;
let playerSprite2;
let itemSprite;
let screenOverlay;

let enemySprite1;
let enemySprite2;
let enemySprite3;
let enemySprite4;

let shrinkSprite;
let pullSprite;
let sprintSprite;

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
let levelUp;




