let hand ={
    x: 0,
    y: 0,
  
    display: function() {
      if(mouseIsPressed) {
        if (mouseButton === LEFT){  
          rect(this.x, this.y, 10, 10);
        }
      } else {
        rect(this.x, this.y, 15, 15);
      }

    },
    move: function() {
      this.x= mouseX;
      this.y= mouseY;
    }
  }