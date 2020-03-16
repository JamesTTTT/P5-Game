class hand {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.size = 10;
    this.unclickedSprite = unclickedCursor;
    this.clickedSprite = clickedCursor;
  }
  display(){
    if(mouseIsPressed) {
      if (mouseButton === LEFT){  
        push();
        translate(this.x, this.y);
        image(this.clickedSprite,-this.size/2,-this.size/2);
        pop();
      }
    } else{
      push();
      translate(this.x, this.y)
      image(this.unclickedSprite,-this.size/2,-this.size/2);
      pop();
    }
  };
  move(){
    this.x = mouseX;
    this.y = mouseY;
  }
}
