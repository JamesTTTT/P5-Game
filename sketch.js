function preload() {
  
}


function setup() {
  createCanvas(720, 720);
  frameRate(60);
  noCursor();
}

function draw() {
  background(20);
  noStroke();

  //Player
  fill(255);
  player.display();
  player.move();
  //line(player.x, player.y, hand.x, hand.y);

  //item
  fill(55);
  stroke(255);
  item.display();
  //item.interact();


  //Hand
  fill(0);
  hand.display();
  hand.move(); 

  }

 function mouseDragged() {
  let d = dist(item.x,item.y,hand.x,hand.y);
   if(d<17){
    item.interact(); 
   }
    
  }





