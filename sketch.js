//variables

//Buttons
let playGame;
let changeWeapon;

//Random Variables
let towers = [];
let enemies = [];
let bullets = [];
let newDrop = [];
let nextLvl = 20;
let score = 0;
let level = 1;
let timer = 0;
let gameControls = [87,83,65,68,69,16,32] //w,a,s,d,e,"shift","space"
let bulletTic = 0;
let bulletTicMax = 15;

//Sprites
let groundSprite;
let playerSprite;
let bulletSprite;
let playerSprite2;

//Item Sprites
let itemSprite;
let itemSprite2;
let itemSprite3;

//Ui overlays
let screenOverlay;
let gameLogo;

//Enemy Sprites
let enemySprite1;
let enemySprite2;
let enemySprite3;
let enemySprite4;

//Ability sign sprite
let shrinkSprite;
let pullSprite;
let sprintSprite;
let gunSprite;

//Game Drop Sprites
let dropSprite1;
let dropSprite2;
let dropSprite3;

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
let pickupSound;
let enemySplat;

function preload(){
  //Game Sprites
 playerSprite = loadImage("Assets/Sprites/PinkLord2.png");
 playerSprite2 = loadImage("Assets/Sprites/PinkLord.png");
 groundSprite = loadImage("Assets/Sprites/Ground.png");
 bulletSprite = loadImage("Assets/Sprites/Bullet.png");

 itemSprite = loadImage("Assets/Sprites/weapons/Crimson.png");
 itemSprite2 = loadImage("Assets/Sprites/weapons/Crystal.png");
 itemSprite3 = loadImage("Assets/Sprites/weapons/Emerald.png");

 //Drop Sprites
 dropSprite1 = loadImage("Assets/Sprites/drops/silverDrop.png");
 dropSprite2 = loadImage("Assets/Sprites/drops/goldDrop.png");
 dropSprite3 = loadImage("Assets/Sprites/drops/diamondDrop.png");
 
 //Enemy Sprites
 enemySprite1 = loadImage("Assets/Sprites/enemy/DeathEnemy.png");
 enemySprite2 = loadImage("Assets/Sprites/enemy/FamineEnemy.png");
 enemySprite3 = loadImage("Assets/Sprites/enemy/PestilenceEnemy.png");
 enemySprite4 = loadImage("Assets/Sprites/enemy/WarEnemy.png");

 //Tower Sprites
 towerSprite1= loadImage("Assets/Sprites/DeathTower.png");
 towerSprite2= loadImage("Assets/Sprites/FamineTower.png");
 towerSprite3= loadImage("Assets/Sprites/PestilenceTower.png");
 towerSprite4= loadImage("Assets/Sprites/WarTower.png");

 //UI Sprites
 unclickedCursor = loadImage("Assets/Sprites/UnclickedCursor.png");
 clickedCursor = loadImage("Assets/Sprites/ClickedCursor.png");
 screenOverlay = loadImage("Assets/Sprites/overlay.png");
 gameLogo = loadImage("Assets/Sprites/gameLogo.png");

 //Ability UI sprites
 pullSprite = loadImage("Assets/Sprites/ability/pull.png");
 sprintSprite = loadImage("Assets/Sprites/ability/sprint.png");
 shrinkSprite = loadImage("Assets/Sprites/ability/shrink.png");
 gunSprite = loadImage("Assets/Sprites/ability/gun.png");

 //Sounds
 clickSound = loadSound("Assets/SFX/klick.wav");
 deathSound = loadSound("Assets/SFX/Dead.mp3");
 backgroundMusic = loadSound("Assets/SFX/Music.mp3");
 levelUp = loadSound("Assets/SFX/levelup.wav");
 pickupSound = loadSound("Assets/SFX/coin.wav"); 
 enemySplat = loadSound("Assets/SFX/splat.wav")
}

function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
  playGame = createButton('Play');
  changeWeapon = createButton('Change Weapon');
  gameMenu = new menu();
  newCursor = new hand();
  newPlayer = new Player(gameControls);
  defaultItem = new Item(gameControls);
  towers.push(new Tower(70,70,"topLeft"));
  towers.push(new Tower(650,70,"topRight"));
  towers.push(new Tower(70,650,"bottomLeft"));
  towers.push(new Tower(650,650,"bottomRight"));
  gameMenu.display();
  gameMenu.changeBtn();
  changeWeapon.hide();
}


function draw() {
  //Game Background
  background(20);
  noStroke();
  image(groundSprite,0,0);

  //Player
  newPlayer.display();
  newPlayer.move();

  
  //drops
  for(let i= 0; i<newDrop.length; i++){
    newDrop[i].display();
    newDrop[i].claimDrop()
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

  //Abilities
  //Force Pull abilty by pressing "E"
  if(level>=4){
    defaultItem.pull();
  }

  //Shrink ability by pressing "Shift"
  if(level>=5){
    newPlayer.shrink();
  }

  //Sprint ability by pressing "Shift"
  if(level>=6){
    newPlayer.sprint();
  }

  //Gun ability by pressing "Space"
  if(level>=7){
    checkKeyPresses();
    for(let i = 0; i < bullets.length; i++) {
      bullets[i].display();
      bullets[i].move();
      if(bullets[i].hitBox()){
        bullets.splice(i,1);
      }
    }
  }

  //Game UI
  gameMenu.ui();
  gameMenu.abilitySigns();
  if(newPlayer.hitBox()){
    deathSound.play();
    gameMenu.display();
  }
}
//Draw Ends Here

//Game Drops!
let dropInterval = 13000;
setInterval(gameDrops,dropInterval);
function gameDrops(){
  let dropSpawner = int(random(3));
  switch(dropSpawner){
    case 0: 
    newDrop.push(new drop(random(0, 720),random(140, 580),"silver"));
    break
    case 1: 
    newDrop.push(new drop(random(0, 720),random(140, 580),"gold"));
    break
    case 2:
    newDrop.push(new drop(random(0, 720),random(140, 580),"diamond")); 
    break
  }
}

//item+drop controll
  function mouseDragged() {
  //Item move
  let d1 = dist(defaultItem.x,defaultItem.y,newCursor.x,newCursor.y);
   if(d1<60){
    defaultItem.interact(); 
   }
   //drop move
    for(let i= 0; i<newDrop.length; i++){
    let d2 = dist(newDrop[i].x,newDrop[i].y,newCursor.x,newCursor.y);
    if(d2<32){
      newDrop[i].move();
    }
   }
  }
    
  //GUN controls
  function checkKeyPresses() {
    if(bulletTic === bulletTicMax) {
    if(keyIsDown(gameControls[6])){
      bullets.push(new Bullet(newPlayer.x,newPlayer.y));
      bulletTic = 0;
    }
  }else{
    bulletTic++;
  }
}

//click sound
  function mousePressed() {
    clickSound.play();
  }

  //Enemy Spawning
  let enemyMultiplier = 1;
  let spawnInterval = 1000;
  setInterval(enemySpawn,spawnInterval*enemyMultiplier);
  function enemySpawn(){
    let spawner = int(random(4));
    switch(spawner){
      case 0:
        enemies.push(new Enemy(40,40,"topLeft"));
        break;
      case 1:
        enemies.push(new Enemy(680,40,"topRight"));
        break;
      case 2:
        enemies.push(new Enemy(40,680,"bottomLeft"));
        break;
      case 3:
        enemies.push(new Enemy(680,680,"bottomRight"));
        break;
    }
    score += 1;
    if(enemyMultiplier>0.4){
      enemyMultiplier -= 0.05;
    }
  }