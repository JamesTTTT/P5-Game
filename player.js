    let player ={
    x: 360,
    y: 360,
    moveSpeed:10,
    border: 15,

    display: function() {
      ellipse(this.x, this.y, 30, 30);
    },
    move: function(){
      if(keyIsDown(UP_ARROW)&&this.y>this.border){
        this.y -= this.moveSpeed;
      }
      if(keyIsDown(DOWN_ARROW)&&this.y<height-this.border){
        this.y += this.moveSpeed;
      }
      if(keyIsDown(LEFT_ARROW)&&this.x>this.border){
        this.x -= this.moveSpeed;
      }
      if(keyIsDown(RIGHT_ARROW)&&this.x<width-this.border){
        this.x += this.moveSpeed;
      }
    },

    
  }


